import Head from 'next/head';

const CertificatePage = () => {

  const certificateUrl ="/certificate.png";


  const message = `Hey! Here's my certificate: ${certificateUrl}`;
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;


  return (
    <>
      <Head>
        <title>My Certificate from YourWebsite</title>
        <meta property="og:title" content="My Certificate from YourWebsite" />
        <meta property="og:description" content="I just earned a certificate from YourWebsite! 🎉" />
        <meta property="og:image" content={certificateUrl} />
        <meta property="og:url" content={certificateUrl} />
        <meta property="og:type" content="website" />
      </Head>

      <main style={{ padding: '2rem' }}>
        <h1>🎓 Congratulations!</h1>
        <img src={certificateUrl} alt="Certificate" width="100%" style={{ maxWidth: '600px' }} />

        <h2>Share your certificate:</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${certificateUrl}`} target="_blank" rel="noopener noreferrer">
              Share on Facebook
            </a>
          </li>
          <li>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${certificateUrl}`} target="_blank" rel="noopener noreferrer">
              Share on LinkedIn
            </a>
          </li>
          <li>
            <a href={`https://twitter.com/intent/tweet?text=Check%20out%20my%20certificate!&url=${certificateUrl}`} target="_blank" rel="noopener noreferrer">
              Share on X
            </a>
          </li>
          <li>
            <a href={`https://api.whatsapp.com/send?text=Check out my certificate! ${certificateUrl}`} target="_blank" rel="noopener noreferrer">
              Share on WhatsApp
            </a>
          </li>
           <li>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Share on WhatsApp
            </a>
          </li>
        </ul>
      </main>
    </>
  );
};

export default CertificatePage;
