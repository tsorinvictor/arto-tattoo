import Head from "next/head";
import { useRouter } from "next/router";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
}

export default function SEO({
  title,
  description,
  image = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.png`,
  type = "website",
}: SEOProps) {
  const router = useRouter();
  const canonicalUrl = `https://artotattoo.ro${router.asPath === "/" ? "" : router.asPath}`;

  return (
    <Head>
      {/* Standard SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="icon"
        href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.png`}
        type="image/png"
      />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://artotattoo.ro${image}`} />
      <meta property="og:site_name" content="Arto Tattoo" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://artotattoo.ro${image}`} />
    </Head>
  );
}
