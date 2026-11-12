(() => {
  const form = document.forms['steering-committee-2027'];
  if (!form) return;
  const bio = form.elements.bio;
  const counter = document.getElementById('candidate-bio-count');
  const validateBio = () => {
    const words = bio.value.trim().split(/\s+/u).filter(Boolean).length;
    counter.textContent = `${words} / 300 words`;
    bio.setCustomValidity(words > 300 ? 'Please shorten your bio to 300 words or fewer.' : '');
    bio.setAttribute('aria-invalid', String(words > 300));
  };
  bio.addEventListener('input', validateBio);
  validateBio();
  // Recheck autofilled/restored content before native validation and submission.
  form.querySelector('button[type="submit"]').addEventListener('click', validateBio);
})();
