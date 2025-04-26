import { IS_BROWSER } from '$fresh/runtime.ts';
import type { JSX } from 'preact';

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
	// Default to semantic secondary button styles
	const defaultClasses =
		'px-2 py-1 border-border-button-secondary border-2 rounded bg-button-secondary-bg text-button-secondary-text hover:bg-button-secondary-hover-bg transition-colors';
	// Combine default classes with any passed-in classes, allowing overrides
	const combinedClasses = `${defaultClasses} ${props.class || ''}`;

	return (
		<button
			{...props}
			// Important: Remove props.class here as it's now part of combinedClasses
			class={combinedClasses}
			disabled={!IS_BROWSER || props.disabled}
		/>
	);
}
