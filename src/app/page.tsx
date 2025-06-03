import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const certificateUrl = "https://lms-uat-test.s3.ap-south-1.amazonaws.com/4db6b15a-dd1c-480b-92d2-1ed58e264f86.jpg";
  const shareText =
    "🎉 I just earned a certificate from YourWebsite! Check it out 👇";
  const fullShareMessage = `${shareText} ${certificateUrl}`;

  const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    certificateUrl
  )}`;
  const linkedinLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    certificateUrl
  )}`;
  const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    fullShareMessage
  )}`;
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
    fullShareMessage
  )}`;

  return (
    <>
      <Head>
  <title>My Certificate from ImmverseAi</title>
  <meta property="og:title" content="My Certificate" />
  <meta property="og:site_name" content="sharingtest" />
  <meta property="og:url" content="https://sharingtest.onrender.com" />
  <meta property="og:description" content="My Certificate from ImmverseAI" />
  <meta property="og:type" content="product" />
  <meta property="og:image" content={certificateUrl}/>

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="My Certificate" />
  <meta name="twitter:description" content="My Certificate from ImmverseAI" />
  <meta name="twitter:image" content={certificateUrl} />
</Head>


      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h1>🎓 Congratulations!</h1>
        <Image
          src={"https://lms-uat-test.s3.ap-south-1.amazonaws.com/4db6b15a-dd1c-480b-92d2-1ed58e264f86.jpg"
          }
          alt="Certificate"
          width={600}
          height={400}
          style={{ maxWidth: "100%", height: "auto" }}
        />

        <h2 style={{ marginTop: "2rem" }}>Share your certificate:</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ margin: "0.5rem" }}>
            <a href={facebookLink} target="_blank" rel="noopener noreferrer">
              🔵 Share on Facebook
            </a>
          </li>
          <li style={{ margin: "0.5rem" }}>
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              💼 Share on LinkedIn
            </a>
          </li>
          <li style={{ margin: "0.5rem" }}>
            <a href={twitterLink} target="_blank" rel="noopener noreferrer">
              🐦 Share on X (Twitter)
            </a>
          </li>
          <li style={{ margin: "0.5rem" }}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              💬 Share on WhatsApp
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}
