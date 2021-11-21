import React, {
    ReactNode,
    useEffect,
    useState,
    useRef
} from 'react';
import {
    ActivityIndicator,
    SafeAreaView
} from 'react-native';
import NCoreContext, {
    useNCoreBottomSheet,
    useNCoreSettings,
    useNCoreLocales,
    useNCoreTheme,
    useNCoreModal
} from './context';
import {
    // BottomSheet,
    PageContainer,
    Dialog,
    Modal
} from '..';
import {
    styles_main
} from './stylesheet';
import {
    Modalize
} from 'react-native-modalize';
import generateTheme from './theme';
import getLocales from './locales';

import './types';

type NCoreProvider = {
    children: ReactNode;
    themes: Array<NCore.Theme>;
};

const SetDefaults = ({
    children
}: any) => {
    const modalizeRef = useRef(null);

    const [settings, setSettings] = useNCoreSettings();
    const [bottomSheet, setBottomSheet] = useNCoreBottomSheet();
    const [locales, setLocales] = useNCoreLocales();
    const [themeVariants, setThemeVariants] = useState({
        data: [],
        value: null
    });
    const [languageVariants, setLanguageVariants] = useState({
        data: {
        },
        value: null
    });
    const [modal, setModal] = useNCoreModal();
    const [theme, setTheme] = useNCoreTheme();

    const {
        colors
    }: any = theme;
    const {
        radiuses,
        spaces
    }: any = theme?.tokens;

    useEffect(() => {
        if(themeVariants.value) {
            if(themeVariants.value === theme?.value) {
                const currentThemeVariant = themeVariants && themeVariants.data && themeVariants.data[theme.value] ? themeVariants.data[theme.value] : null;
                setTheme({
                    ...generateTheme(theme?.value, currentThemeVariant),
                    mergedTheme: true
                });
            } else {
                setTheme({
                    value: themeVariants.value,
                    mergedTheme: true
                });
            }
        }
    }, [themeVariants.value]);

    useEffect(() => {
        if(languageVariants.value) {
            if(languageVariants.value === locales?.value) {
                setLocales({
                    data: getLocales({
                        mergeLocales: languageVariants.data,
                        language: languageVariants.value
                    }),
                    mergedLocales: true
                });
            } else {
                setLocales({
                    value: languageVariants.value,
                    mergedLocales: true
                });
            }
        }
    }, [languageVariants.value]);

    useEffect(() => {
        if(theme.value) {
            const currentThemeVariant = themeVariants && themeVariants.data && themeVariants.data[theme.value] ? themeVariants.data[theme.value] : null;
            setTheme({
                ...generateTheme(theme.value, currentThemeVariant),
                switchTheme: () => {
                    setTheme({
                        value: theme.value === "dark" ? "light" : "dark"
                    });
                }
            });
        }
    }, [theme.value]);

    useEffect(() => {
        if(locales.value) setLocales({
            data: getLocales({
                mergeLocales: languageVariants.data,
                language: locales.value
            })
        });
    }, [locales.value]);

    useEffect(() => {
        if(bottomSheet.isActive) {
            modalizeRef.current.open();
        } else {
            modalizeRef.current.close();
        }
    }, [bottomSheet.isActive]);

    useEffect(() => {
        setModal({
            openModal: (props: any) => {
                let newData = JSON.parse(JSON.stringify(modal.data));
                newData.unshift({
                    ...props
                });
                setModal({
                    data: newData
                });
            },
            closeModal: (index: number) => {
                let newData = JSON.parse(JSON.stringify(modal.data)).filter((e, i) => i !== index);
                setModal({
                    data: newData
                });
            },
            closeAllModal: () => {
                setModal({
                    data: []
                });
            }
        });

        setBottomSheet({
            openBottomSheet: (data: any, configs: any) => {
                let _data: any = {
                    isActive: true,
                    index: 1
                };
                if(data) _data.data = data;
                if(configs) _data.configs = {
                    ...bottomSheet.configs,
                    ...configs
                };
                setBottomSheet(_data);
            },
            snapTo: (index: number, data: any, configs: any) => {
                let _data: any = {
                    index: index ? index : 1
                };
                if(data) _data.data = data;
                if(configs) _data.configs = {
                    ...bottomSheet.configs,
                    ...configs
                };
                setBottomSheet(_data);
            },
            closeBottomSheet: () => {
                setBottomSheet({
                    isActive: false,
                    index: 0,
                    // moved: null,
                });
            }
        });

        setLocales({
            initialConfigs: true,
            data: getLocales({
                language: locales.value
            }),
            setLanguage: (lang) => {
                setLocales({
                    value: lang
                });
            },
            mergeLocales: (language: string, mergeLocales: any) => {
                let newLocales: any = {
                };
                newLocales.data = mergeLocales;
                newLocales.value = language;
                setLanguageVariants(newLocales);
            }
        });

        setTheme({
            initialConfigs: true,
            ...generateTheme(theme.value),
            changeTheme: e => {
                setTheme({
                    value: e
                });
            },
            mergeTheme: (themes: any, selectTheme: string) => {
                let customVariants: any = {
                };
                customVariants.data = JSON.parse(JSON.stringify(themes));
                customVariants.value = selectTheme;
                setThemeVariants(customVariants);
            }
        });

        setSettings({
            setReady: () => {
                setSettings({
                    ready: true
                });
            }
        });
    }, []);

    return <SafeAreaView
        style={[
            styles_main.container,
            {
                backgroundColor: colors.layer1
            }
        ]}
    >
        {children}
        {
            settings.ready ?
                null
                :
                <PageContainer
                    scrollable={false}
                    style={[
                        styles_main.loadingContainer
                    ]}
                >
                    <ActivityIndicator
                        color={colors.primary}
                        size="large"
                    />
                </PageContainer>
        }
        <Modalize
            panGestureEnabled={true}
            tapGestureEnabled={true}
            {...bottomSheet.configs}
            ref={modalizeRef}
            adjustToContentHeight={bottomSheet.autoHeight ? true : false}
            snapPoint={bottomSheet.autoHeight ? null : 300}
            modalStyle={{
                borderTopRightRadius: 50,
                borderTopLeftRadius: 50
            }}
            rootStyle={{
                borderTopRightRadius: 50,
                borderTopLeftRadius: 50,
                zIndex: 99,
            }}
            childrenStyle={{
                borderTopRightRadius: 50,
                borderTopLeftRadius: 50
            }}
            onClosed={() => bottomSheet.closeBottomSheet()}
            onOverlayPress={() => bottomSheet.closeBottomSheet()}
        >
            <PageContainer
                style={{
                    borderTopRightRadius: radiuses.hard,
                    borderTopLeftRadius: radiuses.hard,
                    paddingVertical: spaces.container
                }}
            >
                {bottomSheet.data}
            </PageContainer>
        </Modalize>
        {/*<BottomSheet/>*/}
        {
            modal && modal.data && modal.data.length ?
                modal.data.map((item: any, index: number) => {
                    return <Modal
                        key={`modal-` + index}
                        {...item.modalProps}
                        onDismiss={item.onDismiss}
                        type={item.type}
                        index={index}
                    >
                        {
                            item.type === "custom" ?
                                item.children
                                :
                                <Dialog
                                    title={item.title}
                                    autoCloseOnCancel={item.autoCloseOnCancel}
                                    autoCloseOnConfirm={item.autoCloseOnConfirm}
                                    headerComponent={item.headerComponent}
                                    buttons={item.buttons}
                                    bottomComponent={item.bottomComponent}
                                    content={item.content}
                                    type={item.dialogType}
                                    index={index}
                                    {...item.dialogProps}
                                >
                                    {item.children}
                                </Dialog>
                        }
                    </Modal>;
                })
                :
                null
        }
    </SafeAreaView>;
};

const NCoreProvider = ({
    children,
    themes
}: NCoreProvider) => {
    return (
        <NCoreContext themes={themes}>
            <SetDefaults>
                {children}
            </SetDefaults>
        </NCoreContext>
    );
};

export default NCoreProvider;