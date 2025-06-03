// pages/index.tsx or index.js
import Head from "next/head";
import Image from "next/image";

const certificateUrl = "https://lms-uat-test.s3.ap-south-1.amazonaws.com/4db6b15a-dd1c-480b-92d2-1ed58e264f86.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Certificate from ImmverseAi</title>
        <meta property="og:title" content="My Certificate" />
        <meta property="og:site_name" content="sharingtest" />
        <meta property="og:url" content="https://sharingtest.onrender.com" />
        <meta property="og:description" content="My Certificate from ImmverseAI" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={certificateUrl} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Certificate" />
        <meta name="twitter:description" content="My Certificate from ImmverseAI" />
        <meta name="twitter:image" content={certificateUrl} />
      </Head>

      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h1>🎓 Congratulations!</h1>
        <Image
          src={certificateUrl}
          alt="Certificate"
          width={600}
          height={400}
          style={{ maxWidth: "100%", height: "auto" }}
        />

        <h2 style={{ marginTop: "2rem" }}>Share your certificate:</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><a href={`https://www.facebook.com/sharer/sharer.php?u=https://sharingtest.onrender.com`} target="_blank">🔵 Facebook</a></li>
          <li><a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://sharingtest.onrender.com`} target="_blank">💼 LinkedIn</a></li>
          <li><a href={`https://twitter.com/intent/tweet?text=🎉 I just earned a certificate from YourWebsite! Check it out 👇 https://sharingtest.onrender.com`} target="_blank">🐦 Twitter</a></li>
          <li><a href={`https://wa.me/?text=🎉 I just earned a certificate from YourWebsite! Check it out 👇 https://sharingtest.onrender.com`} target="_blank">💬 WhatsApp</a></li>
        </ul>
      </main>
    </>
  );
}

// export async function getServerSideProps() {
//   return { props: {} };
// }
