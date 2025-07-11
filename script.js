document.addEventListener('DOMContentLoaded', () => {
  const signPetitionNav = document.getElementById('sign-petition-nav');
  const signPetitionHero = document.getElementById('sign-petition-hero');
  const signPetitionCta = document.getElementById('sign-petition-cta');
  const learnMore = document.getElementById('learn-more');
  const viewLocation = document.getElementById('view-location');

  const handleSignPetition = () => {
    window.open('https://chng.it/JwVrwbP8NP', '_blank');
  };

  if (signPetitionNav) {
    signPetitionNav.addEventListener('click', handleSignPetition);
  }

  if (signPetitionHero) {
    signPetitionHero.addEventListener('click', handleSignPetition);
  }

  if (signPetitionCta) {
    signPetitionCta.addEventListener('click', handleSignPetition);
  }

  if (learnMore) {
    learnMore.addEventListener('click', () => {
      document.getElementById('que-pasa').scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (viewLocation) {
    viewLocation.addEventListener('click', () => {
      window.open('https://maps.google.com/?q=Biblioteca+Ayolas+Padre+Dutto+Mar+del+Plata', '_blank');
    });
  }
});
