<script lang="ts">
	import { Sitemap } from '$lib/sitemap';
	import i18n from '$lib/i18n';
	import { Check, Trash2, X } from 'lucide-svelte';
	import type { Writable } from 'svelte/store';
	import { knowledgeStore, sessionsStore, deleteStoreItem } from '$lib/store';
	import { goto } from '$app/navigation';
	import Button from './Button.svelte';

	export let sitemap: Sitemap;
	export let id: string;
	export let shouldConfirmDeletion: Writable<boolean>;

	function deleteRecord() {
		$shouldConfirmDeletion = false;

		switch (sitemap) {
			case Sitemap.KNOWLEDGE:
				if ($knowledgeStore) $knowledgeStore = deleteStoreItem($knowledgeStore, id);
				return goto('/knowledge');

			case Sitemap.SESSIONS:
				if ($sessionsStore) $sessionsStore = deleteStoreItem($sessionsStore, id);
				return goto('/sessions');

			default:
				break;
		}
	}

	function updateConfirmDeletion(value: boolean) {
		$shouldConfirmDeletion = value;
	}
</script>

<div class="delete-button" class:delete--confirm-deletion={$shouldConfirmDeletion}>
	{#if $shouldConfirmDeletion}
		<Button
			variant="icon"
			class="delete-button__confirm"
			on:click={deleteRecord}
			title={$i18n.t('confirmDeletion')}
		>
			<Check class="h-4 w-4" />
		</Button>

		<Button
			variant="icon"
			class="delete__cancel"
			on:click={() => updateConfirmDeletion(false)}
			title={$i18n.t('dismiss')}
		>
			<X class="h-4 w-4" />
		</Button>
	{:else}
		<Button
			variant="icon"
			class="delete__trash"
			on:click={() => updateConfirmDeletion(true)}
			title={sitemap === Sitemap.KNOWLEDGE
				? $i18n.t('knowledgePage.delete')
				: $i18n.t('sessionsPage.delete')}
		>
			<Trash2 class="h-4 w-4" />
		</Button>
	{/if}
</div>

<style lang="postcss">
	.delete-button {
		@apply flex h-full flex-row;
	}

	.delete-button :global(.delete-button__confirm) {
		@apply hover:text-negative;
	}
</style>
