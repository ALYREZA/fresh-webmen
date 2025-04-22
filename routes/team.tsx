import { PageProps } from "$fresh/server.ts";

// Define the job title keys as constants
const JobTitleKeys = {
  UI_UX_DESIGNER: "jobTitleUiUxDesigner",
  FULLSTACK_DEV: "jobTitleFullstackDev",
  DEVOPS: "jobTitleDevOps",
  LEAD_DEV: "teamLeadDevTitle", // Or use a new specific key if preferred
  PROJECT_MANAGER: "teamProjectManagerTitle", // Or use a new specific key
  FRONTEND_DEV: "jobTitleFrontendDev",
  BACKEND_DEV: "jobTitleBackendDev",
  QA_ENGINEER: "jobTitleQaEngineer",
  PRODUCT_OWNER: "jobTitleProductOwner",
} as const; // 'as const' makes it a readonly object with literal types

type JobTitleKey = typeof JobTitleKeys[keyof typeof JobTitleKeys];

// Define a simple structure for team member data
interface TeamMember {
  nameKey: string; // Changed from name to nameKey
  titleKey: JobTitleKey;
  imageUrl: string;
  linkedinUrl: string;
}

// Define the state shape expected from middleware
interface TeamState {
  t: (key: string) => string;
}

// Sample team member data (using keys from the const object and for names)
const teamMembers: TeamMember[] = [
  {
    nameKey: "teamMemberNameNasim", // Use nameKey
    titleKey: JobTitleKeys.UI_UX_DESIGNER,
    imageUrl: "/images/teams/nasim.webp",
    linkedinUrl: "https://linkedin.com/in/nasim-eskandarlavasani/",
  },
  {
    nameKey: "teamMemberNamePouria", // Use nameKey
    titleKey: JobTitleKeys.FULLSTACK_DEV,
    imageUrl: "/images/teams/pouria.webp",
    linkedinUrl: "https://linkedin.com/in/pouriamolaei/",
  },
  {
    nameKey: "teamMemberNameSiavash", // Use nameKey
    titleKey: JobTitleKeys.DEVOPS,
    imageUrl: "/images/teams/siavash.webp",
    linkedinUrl: "https://linkedin.com/in/siavash-beheshti/",
  },
  // Add more team members here using nameKey
];

// Update component signature
export default function TeamPage({ state }: PageProps<undefined, TeamState>) {
  const { t } = state; // Get t from state

  return (
    // Use semantic background
    <section id="team" class="py-20 bg-background-alt min-h-screen">
      <div class="container mx-auto px-4">
        {/* Use translation function */}
        <h2 class="text-4xl font-bold mb-10 text-center">{t('teamTitle')}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            // Use nameKey for the React key prop
            <div key={member.nameKey} class="bg-background-default p-6 rounded-lg shadow-md text-center">
              <img
                src={member.imageUrl}
                // Use translated name in alt text
                alt={`${t('teamPhotoAltPrefix')} ${t(member.nameKey)}`}
                // Use semantic background for placeholder visibility
                class="w-32 h-32 rounded-full mx-auto mb-4 object-cover bg-background-neutral-light"
              />
              {/* Use translated name */}
              <h3 class="text-xl font-bold mb-1">{t(member.nameKey)}</h3>
              {/* Use semantic text color - t() will now use the keys */}
              <p class="text-text-neutral-medium mb-3">{t(member.titleKey)}</p>
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                // Use semantic link colors
                class="text-link hover:text-link-hover transition-colors"
              >
                {/* Use translation function */}
                {t('teamLinkedInLink')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}