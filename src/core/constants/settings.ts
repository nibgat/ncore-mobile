export type SettingsStore = {
    ready: boolean;
    setReady: () => void;
};

const nCoreSettingsStore: SettingsStore = {
    ready: false,
    setReady: () => { }
};
export default nCoreSettingsStore;