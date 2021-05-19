/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import { Frame, Layout, Navigation, Page, TopBar } from "@shopify/polaris";
import { HomeMajor, LanguageMinor } from "@shopify/polaris-icons";
import { Routes } from "./Routes";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { ItemProps } from "@shopify/polaris/types/latest/src/components/Navigation/components";

const languages = [
  {
    langCode: "en-CA",
    label: "English",
  },
  {
    langCode: "fr-CA",
    label: "Français",
  },
  {
    langCode: "ar",
    label: "العربية",
  },
  {
    langCode: "de",
    label: "Deutsch",
  },
  {
    langCode: "es",
    label: "Español",
  },
  {
    langCode: "pa",
    label: "ਪੰਜਾਬੀ/پن٘جابی",
  },
  {
    langCode: "pt",
    label: "Português",
  },
  {
    langCode: "zh-CN",
    label: "中文",
  },
];

function LanguageBar(): ItemProps[] {
  const output: ItemProps[] = languages.map((x) => {
    const selected = i18next.language === x.langCode;
    return {
      url: "/",
      label: x.label,
      onClick: () => {
        i18next.changeLanguage(x.langCode);
      },
      selected: selected,
    };
  });
  return output;
}

export function AppFrame() {
  const { t } = useTranslation(undefined, { useSuspense: false });
  const location = useLocation();
  const [isMobileNavigationActive, setIsMobileNavigationActive] = useState(
    false,
  );

  const handleMobileNavigationToggle = useCallback(
    () => setIsMobileNavigationActive((isActive) => !isActive),
    [],
  );

  return (
    <Frame
      topBar={
        <TopBar
          showNavigationToggle
          onNavigationToggle={handleMobileNavigationToggle}
        />
      }
      navigation={
        <Navigation location={location.pathname}>
          <Navigation.Section
            separator
            items={[
              {
                url: "/",
                label: t("home"),
                icon: HomeMajor,
              },
            ]}
          />
          <Navigation.Section // Todo translating the word "Language" and displaying icon doesn't work for some reason
            separator
            title="Language"
            items={LanguageBar()}
          />
        </Navigation>
      }
      showMobileNavigation={isMobileNavigationActive}
      onNavigationDismiss={handleMobileNavigationToggle}
    >
      <Page fullWidth>
        <Layout>
          <Layout.Section>
            <Routes />
          </Layout.Section>
          <Layout.Section secondary>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="VaxHuntersCan"
              options={{ height: 800 }}
            />
          </Layout.Section>
        </Layout>
      </Page>
    </Frame>
  );
}
