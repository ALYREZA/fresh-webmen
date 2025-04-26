import { PageProps, Handlers } from "$fresh/server.ts";
import { Resend } from "resend"; // Import Resend

// Define the state shape expected from middleware
interface ContactState {
  lang: string;
  t: (key: string) => string;
}

// Add Handlers for form processing
export const handler: Handlers<undefined, ContactState> = {
  async POST(req, _ctx) {
    const form = await req.formData();
    const name = form.get("name")?.toString();
    const email = form.get("email")?.toString();
    const message = form.get("message")?.toString();
    const mobile = form.get("mobile")?.toString(); // <-- Add mobile field retrieval
    const lang = form.get("lang")?.toString() || 'en';


    // Basic validation
    // <-- Add mobile to validation
    if (!name || !email || !message || !mobile) {
      console.error("Form submission incomplete:", { name, email, message, mobile });
      // Consider rendering the form again with an error message instead of just text
      return new Response("Form data incomplete", { status: 400 });
    }

    console.log("Received contact form submission:", { name, email, mobile }); // <-- Add mobile to log

    // --- Email Sending Logic ---
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
        console.error("RESEND_API_KEY environment variable not set.");
        // Handle error appropriately - maybe return a 500 status
        // For now, just log and proceed without sending email
        // In a real app, you might want to prevent the redirect or show an error
    } else {
        const resend = new Resend(resendApiKey);
        const yourReceivingEmail = "webmen.developer@gmail.com"; // <-- REPLACE with your email address
        const sendingDomainEmail = "no-reply@mail.webmen.ir"; // <-- REPLACE with your verified Resend domain or use default

        try {
          const { data, error } = await resend.emails.send({
            from: `Contact Form <${sendingDomainEmail}>`, // Sender name and email
            to: [yourReceivingEmail], // Your email address to receive notifications
            subject: `New Contact Form Submission from ${name}`,
            html: `
              <p>You received a new message from your website contact form:</p>
              <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Mobile:</strong> ${mobile}</li> {/* <-- Add mobile to email */}
              </ul>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
            `,
          replyTo: email, // Set the reply-to header to the sender's email
          });

          if (error) {
            console.error("Failed to send email:", error);
            // Handle email sending failure (e.g., log, maybe return a specific error page/status)
          } else {
            console.log("Email sent successfully:", data);
          }
        } catch (error) {
          console.error("Exception during email sending:", error);
          // Handle exceptions during the API call
        }
    }
    // --- End Email Sending Logic ---


    // Redirect to the same page (or a thank you page) after submission
    const headers = new Headers();
    // Consider redirecting to a dedicated thank-you page for better UX
    // headers.set("location", "/thank-you");
    headers.set("location", `/contact?lang=${lang}&submitted=true`); // Or add a query param to show success
    return new Response(null, {
      status: 303, // See Other status code for POST-redirect-GET pattern
      headers,
    });
  },
  // GET handler remains implicit or can be added if needed for initial render logic
  // async GET(req, ctx) {
  //   return await ctx.render(); // Assuming default render is sufficient
  // }
};


// Update component signature
export default function ContactPage({ state, url }: PageProps<undefined, ContactState>) {
  const { t, lang } = state; // Get t from state
  const submitted = url.searchParams.get("submitted") === "true"; // Check for submission status

  return (
    <>
      {/* Use semantic background */}
      <section id="contact" class="py-20 bg-brand-accent-bg min-h-screen">
        <div class="container mx-auto px-4">
          {/* Use translation function */}
          <h2 class="text-4xl font-bold mb-10 text-center">{t('contactTitle')}</h2>

          {/* Updated Description Section with Translations */}
          <div class="max-w-2xl mx-auto text-center mb-8">
            <h3 class="text-2xl font-semibold mb-4">{t('contactSubheading1')}</h3>
            <p class="text-lg mb-2">{t('contactSubheading2')}</p>
            <p class="text-text-neutral-dark">
              {t('contactDescription')}
            </p>
          </div>
          {/* End Updated Description Section */}

          <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            {/* Conditionally show success message */}
            {submitted && (
              // Use semantic success colors
              <div class="mb-4 p-4 bg-background-success-light border border-border-success text-text-success rounded">
                {/* Use the new success message key */}
                {t('formSuccessMessage')}
              </div>
            )}
            {/* Update form tag: remove onSubmit, add method="post" */}
            <form method="post">
              <div class="grid grid-cols-1 gap-6">
                <div>
                  {/* Use semantic text color */}
                  <label for="name" class="block text-sm font-medium text-text-neutral-dark mb-1">{t('formNameLabel')}</label>
                  {/* Use semantic focus ring */}
                  <input id="name" name="name" type="text" required class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ring-focus" />
                  <input type='hidden' name='lang' value={lang} />
                </div>
                <div>
                  {/* Use semantic text color */}
                  <label for="email" class="block text-sm font-medium text-text-neutral-dark mb-1">{t('formEmailLabel')}</label>
                  {/* Use semantic focus ring */}
                  <input id="email" name="email" type="email" required class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ring-focus" />
                </div>
                {/* Add Mobile Field */}
                <div>
                  <label for="mobile" class="block text-sm font-medium text-text-neutral-dark mb-1">{t('formMobileLabel')}</label> {/* Assuming 'formMobileLabel' exists in your translations */}
                  <input id="mobile" name="mobile" type="tel" required class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ring-focus" />
                </div>
                {/* End Add Mobile Field */}
                <div>
                  {/* Use semantic text color */}
                  <label for="message" class="block text-sm font-medium text-text-neutral-dark mb-1">{t('formMessageLabel')}</label>
                  {/* Use semantic focus ring */}
                  <textarea id="message" name="message" rows={4} required class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ring-focus"></textarea>
                </div>
                {/* Use semantic button colors */}
                <button type="submit" class="bg-button-primary-bg text-button-primary-text py-2 px-6 rounded-md hover:bg-button-primary-hover-bg transition-colors font-medium">{t('formSubmitButton')}</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}