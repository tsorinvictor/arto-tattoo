import type { AppProps } from "next/app";
import Head from "next/head";
import "@styles/globals.scss";
import Layout from "@/components/Layout";
import "../i18n";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { t } = useTranslation();
  const router = useRouter();

  const getSeoKey = (path: string) => {
    if (path === "/") return "home";
    if (path.startsWith("/about")) return "about";
    return "home";
  };

  const seoKey = getSeoKey(router.pathname);

  return (
    <Layout>
      <SEO
        title={t(`seo.${seoKey}.title`)}
        description={t(`seo.${seoKey}.description`)}
      />
      <Component {...pageProps} />
    </Layout>
  );
}
