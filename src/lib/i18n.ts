import i18next from 'i18next';
import { createI18nStore } from 'svelte-i18next';

i18next.init({
	lng: 'en',
	resources: {
		en: {
			translation: {
				sessions_one: 'Session',
				sessions_other: 'Sessions',
				knowledge_one: 'Knowledge',
				knowledge_other: 'Knowledge',
				settings: 'Settings',
				motd: 'Motd',
				messageOfTheDay: 'Message of the day',
				theme: { dark: 'Dark', light: 'Light' },
				copy: 'Copy',
				retry: 'Retry',
				confirmDeletion: 'Confirm deletion',
				dismiss: 'Dismiss',
				you: 'You',
				assistant: 'Assistant',
				system: 'System',
				success: 'Success',
				error: 'Error',
				pullingModel: 'Pulling model',
				modelWasDownloaded: '{{model}} was downloaded',
				sessionsPage: {
					new: 'New session',
					empty: 'No sessions',
					name: 'Name',
					content: 'Content',
					prompt: 'Prompt',
					run: 'Run',
					delete: 'Delete session',
					noSessionChosen: 'Create a new session or choose an existing one from the list',
					promptPlaceholder: 'Write literally anything',
					stopResponse: 'Stop response',
					systemPrompt: 'System prompt',
					goToKnowledge: 'Go to knowledge',
					writePromptToStart: 'Write a prompt to start a new session'
				},
				knowledgePage: {
					new: 'New knowledge',
					empty: 'No knowledge',
					name: 'Name',
					content: 'Content',
					save: 'Save',
					delete: 'Delete knowledge',
					knowledgeSaved: 'Knowledge saved',
					noKnowledgeChosen: 'Create new knowledge or choose one from the list'
				},
				settingsPage: {
					server: 'Server',
					availableModels: 'Available models',
					pullModel: 'Pull model',
					pullModelPlaceholder: 'Model tag (e.g. llama3.1)',
					downloadModel: 'Download model',
					disconnected: 'disconnected',
					connected: 'connected',
					dangerZone: 'Danger zone',
					deleteAllSessions: 'Delete all sessions',
					deleteAllKnowledge: 'Delete all knowledge',
					deleteServerSettings: 'Delete server settings',
					version: 'Version',
					allowConnections: 'Change your server settings to allow connections from',
					seeDocs: 'see docs',
					checkBrowserExtensions: 'Also check no browser extensions are blocking the connection',
					tryingToConnectNotLocalhost:
						'If you want to connect to an Ollama server that is not available on <code class="code">localhost</code> or <code class="code">127.0.0.1</code> you will need to',
					createTunnel: 'create a tunnel',
					or: 'or',
					allowMixedContent: 'allow mixed content',
					browseModels: 'Browse the list of available models in',
					ollamaLibrary: "Ollama's library"
				},
				dialogs: {
					areYouSureYouWantToLeave:
						'Are you sure you want to leave?\nThe completion in progress will stop',
					areYouSureYouWantToDeleteAll: 'Are you sure you want to delete all {{type}}?'
				},
				errors: {
					genericError: 'Sorry, something went wrong.\n```\n${{error}}\n```',
					somethingWentWrong: 'Sorry, something went wrong.',
					notFound: 'The page you are looking for does not exist.',
					internalServerError: 'There was an internal server error. Please try again later.',
					cantConnectToOllamaServer: "Can't connect to Ollama server",
					couldntConnectToOllamaServer: "Couldn't connect to Ollama server",
					ollamaConnectionError: "Couldn't connect to Ollama. Is the [server running](/settings)?"
				}
			}
		}
	},
	interpolation: {
		escapeValue: false // not needed for svelte as it escapes by default
	}
});

const i18n = createI18nStore(i18next);
export default i18n;
