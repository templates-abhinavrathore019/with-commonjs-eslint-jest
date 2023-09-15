const parseAffectionLevel = (dog) => {
  let level = dog.affection_level;
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseAdaptability = (dog) => {
  let level = dog.adaptability;
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseChildFriendly = (dog) => {
  let level = dog.child_friendly;
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseDogFriendly = (dog) => {
  let level = dog.dog_friendly;
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseEnergyLevel = (dog) => {
  let level = dog.energy_level;
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseGrooming = (dog) => {
  let level = dog.grooming;
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseHealthIssues = (dog) => {
  let level = dog.health_issues;
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseIntelligence = (dog) => {
  let level = dog.intelligence;
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseSheddingLevel = (dog) => {
  let level = dog.shedding_level;
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseSocialNeeds = (dog) => {
  let level = dog.social_needs;
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseStrangerFriendly = (dog) => {
  let level = dog.stranger_friendly;
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseVocalisation = (dog) => {
  let level = dog.vocalisation;
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const attrParser = {
  parseAffectionLevel,
  parseAdaptability,
  parseChildFriendly,
  parseDogFriendly,
  parseEnergyLevel,
  parseGrooming,
  parseHealthIssues,
  parseIntelligence,
  parseSheddingLevel,
  parseSocialNeeds,
  parseStrangerFriendly,
  parseVocalisation,
};

module.exports = { attrParser };
