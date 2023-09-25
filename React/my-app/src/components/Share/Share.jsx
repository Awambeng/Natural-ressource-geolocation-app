import React, { useState } from 'react';

function Share() {
  const [url, setUrl] = useState('');
  
  function handleShare() {
    const shareUrl = encodeURIComponent('http://localhost:3000');
    const shareText = encodeURIComponent('Check out this link!');
    const twitterUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareText}`;
    const linkedinUrl = `https://www.linkedin.com/shareArticle?url=${shareUrl}&title=${shareText}`;
    window.open(twitterUrl);
    window.open(facebookUrl);
    window.open(linkedinUrl);
  }

  return (
    <div>
      <input type="text" placeholder="Enter URL" value={url} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={handleShare}>Share</button>
    </div>
  );
}

export default Share;