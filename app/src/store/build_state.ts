import { makeStore } from '@/app/src/store/store';
import { fetchProjects } from '@/app/src/store/slices/projectsSlice';

// Runs at build time so visitors get the content in the HTML instead of fetching Firestore.
export async function getBuildState() {
    const store = makeStore();

    // never deploy a site with missing content
    const result = await store.dispatch(fetchProjects());
    if (result.meta.requestStatus === 'rejected') {
        throw new Error(`Build data failed: ${result.type}`);
    }

    return store.getState();
}
