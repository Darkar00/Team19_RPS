export interface BodySystem {
  id: string;
  name: string;
  icon: string;
}

export interface Effect {
  id: string;
  title: string;
  description: string;
  bodySystem: string;
  type: 'short-term' | 'long-term';
}

export interface Substance {
  id: string;
  name: string;
  icon: string;
  description: string;
  effects: Effect[];
}

export const bodySystems: Record<string, BodySystem> = {
  cardiovascular: {
    id: 'cardiovascular',
    name: 'Cardiovascular System',
    icon: 'heart',
  },
  nervous: {
    id: 'nervous',
    name: 'Nervous System',
    icon: 'brain',
  },
  respiratory: {
    id: 'respiratory',
    name: 'Respiratory System',
    icon: 'lungs',
  },
  digestive: {
    id: 'digestive',
    name: 'Digestive System',
    icon: 'stomach',
  },
  skeletal: {
    id: 'skeletal',
    name: 'Skeletal System',
    icon: 'bone',
  },
  liver: {
    id: 'liver',
    name: 'Liver',
    icon: 'liver',
  },
  kidney: {
    id: 'kidney',
    name: 'Kidney',
    icon: 'kidney',
  },
};

export const substances: Substance[] = [
  {
    id: 'caffeine',
    name: 'Caffeine',
    icon: 'coffee',
    description: 'A stimulant that affects the central nervous system, temporarily warding off drowsiness and restoring alertness.',
    effects: [
      {
        id: 'caffeine-1',
        title: 'Increased Heart Rate',
        description: 'Caffeine stimulates your nervous system, signaling the heart to beat faster. Most people experience an increase of 3-10 beats per minute.',
        bodySystem: 'cardiovascular',
        type: 'short-term',
      },
      {
        id: 'caffeine-2',
        title: 'Improved Alertness',
        description: 'Caffeine blocks adenosine receptors in the brain, reducing tiredness and temporarily improving mental alertness and focus.',
        bodySystem: 'nervous',
        type: 'short-term',
      },
      {
        id: 'caffeine-3',
        title: 'Increased Blood Pressure',
        description: 'Caffeine can cause a short-term spike in blood pressure by constricting blood vessels and increasing heart output.',
        bodySystem: 'cardiovascular',
        type: 'short-term',
      },
      {
        id: 'caffeine-4',
        title: 'Diuretic Effect',
        description: 'Caffeine increases urine production by inhibiting reabsorption of water in the kidneys, leading to more frequent urination.',
        bodySystem: 'kidney',
        type: 'short-term',
      },
      {
        id: 'caffeine-5',
        title: 'Potential Bone Calcium Loss',
        description: 'Regular high caffeine consumption may lead to calcium loss and reduced bone density over time, particularly if calcium intake is low.',
        bodySystem: 'skeletal',
        type: 'long-term',
      },
      {
        id: 'caffeine-6',
        title: 'Possible Stomach Irritation',
        description: 'Caffeine stimulates acid production in the stomach, which may lead to discomfort, acid reflux, or aggravate existing digestive conditions.',
        bodySystem: 'digestive',
        type: 'long-term',
      },
    ],
  },
  {
    id: 'alcohol',
    name: 'Alcohol',
    icon: 'beer',
    description: 'A psychoactive substance that depresses the central nervous system, affecting brain function and behavior.',
    effects: [
      {
        id: 'alcohol-1',
        title: 'Impaired Judgment',
        description: 'Alcohol affects the brain\'s prefrontal cortex, impairing judgment, decision making, and reducing inhibitions.',
        bodySystem: 'nervous',
        type: 'short-term',
      },
      {
        id: 'alcohol-2',
        title: 'Slowed Reflexes',
        description: 'Alcohol interferes with nerve cell communication, slowing reaction time and impairing coordination.',
        bodySystem: 'nervous',
        type: 'short-term',
      },
      {
        id: 'alcohol-3',
        title: 'Dehydration',
        description: 'Alcohol inhibits the production of vasopressin, a hormone that helps the body retain water, causing increased urination and dehydration.',
        bodySystem: 'kidney',
        type: 'short-term',
      },
      {
        id: 'alcohol-4',
        title: 'Liver Inflammation',
        description: 'Liver cells process alcohol, breaking it down into toxic byproducts that can cause inflammation and damage to liver tissue.',
        bodySystem: 'liver',
        type: 'short-term',
      },
      {
        id: 'alcohol-5',
        title: 'Liver Cirrhosis',
        description: 'Long-term heavy alcohol use causes repeated inflammation, leading to scarring and permanent damage to liver tissue known as cirrhosis.',
        bodySystem: 'liver',
        type: 'long-term',
      },
      {
        id: 'alcohol-6',
        title: 'Heart Disease',
        description: 'Regular heavy drinking can lead to high blood pressure, irregular heartbeat, and weakened heart muscle, increasing risk of heart disease.',
        bodySystem: 'cardiovascular',
        type: 'long-term',
      },
      {
        id: 'alcohol-7',
        title: 'Brain Structure Changes',
        description: 'Chronic alcohol use can physically change brain structure and function, affecting cognitive abilities and mood regulation.',
        bodySystem: 'nervous',
        type: 'long-term',
      },
    ],
  },
  {
    id: 'nicotine',
    name: 'Nicotine',
    icon: 'cigarette',
    description: 'A stimulant found in tobacco that causes addiction and affects the brain, heart, and other organs.',
    effects: [
      {
        id: 'nicotine-1',
        title: 'Increased Alertness',
        description: 'Nicotine stimulates the release of adrenaline, creating a temporary sense of alertness and stimulation.',
        bodySystem: 'nervous',
        type: 'short-term',
      },
      {
        id: 'nicotine-2',
        title: 'Blood Vessel Constriction',
        description: 'Nicotine causes blood vessels to narrow, reducing blood flow and temporarily increasing blood pressure.',
        bodySystem: 'cardiovascular',
        type: 'short-term',
      },
      {
        id: 'nicotine-3',
        title: 'Increased Heart Rate',
        description: 'Nicotine stimulates the heart to beat faster, typically increasing heart rate by 10-20 beats per minute.',
        bodySystem: 'cardiovascular',
        type: 'short-term',
      },
      {
        id: 'nicotine-4',
        title: 'Reduced Lung Function',
        description: 'Smoking damages the airways and air sacs in your lungs, reducing lung capacity and making breathing more difficult over time.',
        bodySystem: 'respiratory',
        type: 'long-term',
      },
      {
        id: 'nicotine-5',
        title: 'Increased Cancer Risk',
        description: 'The chemicals in tobacco smoke damage DNA, leading to mutations that can cause cancers in the lungs, mouth, throat, and other organs.',
        bodySystem: 'respiratory',
        type: 'long-term',
      },
      {
        id: 'nicotine-6',
        title: 'Coronary Heart Disease',
        description: 'Long-term smoking damages blood vessels, accelerates plaque buildup in arteries, and increases risk of heart attack and stroke.',
        bodySystem: 'cardiovascular',
        type: 'long-term',
      },
    ],
  },
  {
    id: 'cannabis',
    name: 'Cannabis',
    icon: 'cannabis',
    description: 'A psychoactive plant containing THC and other compounds that affect brain function and behavior.',
    effects: [
      {
        id: 'cannabis-1',
        title: 'Altered Perception',
        description: 'THC changes activity in the brain\'s prefrontal cortex, altering sensory perception and sometimes causing an intensified experience of sights, sounds, and tastes.',
        bodySystem: 'nervous',
        type: 'short-term',
      },
      {
        id: 'cannabis-2',
        title: 'Impaired Memory',
        description: 'THC alters how information is processed in the hippocampus, affecting short-term memory formation and attention.',
        bodySystem: 'nervous',
        type: 'short-term',
      },
      {
        id: 'cannabis-3',
        title: 'Increased Heart Rate',
        description: 'Cannabis can raise heart rate by 20-50 beats per minute for up to 3 hours after use due to THC\'s effects on the nervous system.',
        bodySystem: 'cardiovascular',
        type: 'short-term',
      },
      {
        id: 'cannabis-4',
        title: 'Bronchial Irritation',
        description: 'Smoking cannabis can irritate the lungs, leading to coughing, increased phlegm production, and potential respiratory problems.',
        bodySystem: 'respiratory',
        type: 'short-term',
      },
      {
        id: 'cannabis-5',
        title: 'Possible Brain Development Impact',
        description: 'Regular cannabis use during adolescence may affect brain development, particularly in areas involved in memory, attention, and learning.',
        bodySystem: 'nervous',
        type: 'long-term',
      },
      {
        id: 'cannabis-6',
        title: 'Respiratory Issues',
        description: 'Long-term smoking of cannabis can lead to chronic bronchitis symptoms, coughing, and increased susceptibility to lung infections.',
        bodySystem: 'respiratory',
        type: 'long-term',
      },
    ],
  },
  {
    id: 'sugar',
    name: 'Sugar',
    icon: 'candy',
    description: 'A common sweetener that can have significant metabolic effects when consumed in excess.',
    effects: [
      {
        id: 'sugar-1',
        title: 'Blood Sugar Spike',
        description: 'Rapid increase in blood glucose levels after consumption, causing a quick energy boost followed by a potential crash.',
        bodySystem: 'digestive',
        type: 'short-term',
      },
      {
        id: 'sugar-2',
        title: 'Insulin Response',
        description: 'Triggers the pancreas to release insulin to manage blood glucose levels, potentially leading to insulin resistance with prolonged overconsumption.',
        bodySystem: 'digestive',
        type: 'long-term',
      },
      {
        id: 'sugar-3',
        title: 'Dental Health Impact',
        description: 'Contributes to tooth decay by providing food for harmful oral bacteria that produce acid.',
        bodySystem: 'digestive',
        type: 'long-term',
      },
      {
        id: 'sugar-4',
        title: 'Inflammatory Response',
        description: 'Excess sugar consumption can trigger inflammatory responses in the body, potentially affecting multiple organ systems.',
        bodySystem: 'cardiovascular',
        type: 'long-term',
      },
      {
        id: 'sugar-5',
        title: 'Mood and Energy Fluctuations',
        description: 'Causes rapid changes in blood sugar levels, leading to mood swings and energy level variations.',
        bodySystem: 'nervous',
        type: 'short-term',
      },
    ],
  },
  {
    id: 'opioids',
    name: 'Opioids',
    icon: 'pill',
    description: 'A class of drugs that includes prescription pain relievers and illicit substances like heroin, which act on opioid receptors in the brain.',
    effects: [
      {
        id: 'opioids-1',
        title: 'Pain Relief',
        description: 'Binds to opioid receptors in the brain and spinal cord, blocking pain signals and producing a sense of euphoria.',
        bodySystem: 'nervous',
        type: 'short-term',
      },
      {
        id: 'opioids-2',
        title: 'Respiratory Depression',
        description: 'Slows breathing by affecting the brain stem\'s respiratory control centers, which can be dangerous or fatal in high doses.',
        bodySystem: 'respiratory',
        type: 'short-term',
      },
      {
        id: 'opioids-3',
        title: 'Constipation',
        description: 'Slows digestive tract movement, reducing bowel function and causing severe constipation even with regular use.',
        bodySystem: 'digestive',
        type: 'short-term',
      },
      {
        id: 'opioids-4',
        title: 'Physical Dependence',
        description: 'Regular use leads to tolerance and dependence, with the body requiring the drug to function normally and experiencing withdrawal when stopped.',
        bodySystem: 'nervous',
        type: 'long-term',
      },
      {
        id: 'opioids-5',
        title: 'Hormone Disruption',
        description: 'Long-term use can disrupt the endocrine system, affecting testosterone and estrogen production, potentially causing fertility issues.',
        bodySystem: 'digestive',
        type: 'long-term',
      },
    ],
  },
  {
    id: 'cocaine',
    name: 'Cocaine',
    icon: 'pill',
    description: 'A powerful stimulant drug derived from coca leaves that increases levels of dopamine in brain circuits related to pleasure and movement.',
    effects: [
      {
        id: 'cocaine-1',
        title: 'Intense Euphoria',
        description: 'Blocks the reuptake of dopamine, causing it to build up between nerve cells, amplifying pleasure signals and creating intense euphoria.',
        bodySystem: 'nervous',
        type: 'short-term',
      },
      {
        id: 'cocaine-2',
        title: 'Elevated Heart Rate',
        description: 'Causes significant increases in heart rate and blood pressure by triggering the release of stress hormones like adrenaline.',
        bodySystem: 'cardiovascular',
        type: 'short-term',
      },
      {
        id: 'cocaine-3',
        title: 'Nasal Tissue Damage',
        description: 'When snorted, cocaine causes constriction of blood vessels in the nasal tissues, leading to damage, inflammation, and eventual tissue death.',
        bodySystem: 'respiratory',
        type: 'long-term',
      },
      {
        id: 'cocaine-4',
        title: 'Heart Damage',
        description: 'Repeated use can cause inflammation of heart muscle, increased aortic stiffness, and higher risk of heart attack, even in young users.',
        bodySystem: 'cardiovascular',
        type: 'long-term',
      },
      {
        id: 'cocaine-5',
        title: 'Cognitive Impairment',
        description: 'Long-term use damages areas of the brain involved in attention, decision-making, memory, and behavioral control.',
        bodySystem: 'nervous',
        type: 'long-term',
      },
    ],
  },
  {
    id: 'amphetamines',
    name: 'Amphetamines',
    icon: 'pill',
    description: 'Synthetic stimulants that increase activity of dopamine and norepinephrine in the brain, used medically for ADHD but also misused recreationally.',
    effects: [
      {
        id: 'amphetamines-1',
        title: 'Increased Focus',
        description: 'Raises levels of dopamine and norepinephrine in the brain, improving concentration, attention, and reducing hyperactive behavior.',
        bodySystem: 'nervous',
        type: 'short-term',
      },
      {
        id: 'amphetamines-2',
        title: 'Reduced Appetite',
        description: 'Activates the body\'s "fight or flight" response, suppressing hunger signals and reducing interest in food.',
        bodySystem: 'digestive',
        type: 'short-term',
      },
      {
        id: 'amphetamines-3',
        title: 'Increased Blood Pressure',
        description: 'Causes blood vessels to constrict, raising blood pressure and placing additional strain on the cardiovascular system.',
        bodySystem: 'cardiovascular',
        type: 'short-term',
      },
      {
        id: 'amphetamines-4',
        title: 'Tooth Decay',
        description: 'Long-term use causes dry mouth, teeth grinding, and poor dental hygiene, leading to severe dental problems known as "meth mouth".',
        bodySystem: 'digestive',
        type: 'long-term',
      },
      {
        id: 'amphetamines-5',
        title: 'Dopamine System Damage',
        description: 'Prolonged use can damage dopamine neurons, leading to reduced dopamine levels and persistent problems with mood and motivation.',
        bodySystem: 'nervous',
        type: 'long-term',
      },
    ],
  },
  {
    id: 'tomato-soup',
    name: 'Tomato Soup',
    icon: 'soup',
    description: 'A popular comfort food rich in nutrients and potential health benefits.',
    effects: [
      {
        id: 'tomato-soup-1',
        title: 'Lycopene Boost',
        description: 'Contains high levels of lycopene, a powerful antioxidant that may help protect against certain types of cancer and heart disease.',
        bodySystem: 'cardiovascular',
        type: 'long-term',
      },
      {
        id: 'tomato-soup-2',
        title: 'Vitamin C Support',
        description: 'Provides a good source of Vitamin C, which supports immune function and helps in collagen production.',
        bodySystem: 'cardiovascular',
        type: 'short-term',
      },
      {
        id: 'tomato-soup-3',
        title: 'Hydration',
        description: 'High water content helps in maintaining proper hydration and supports overall bodily functions.',
        bodySystem: 'digestive',
        type: 'short-term',
      },
      {
        id: 'tomato-soup-4',
        title: 'Potential Sodium Intake',
        description: 'Canned or prepared soups can be high in sodium, which may impact blood pressure if consumed in excess.',
        bodySystem: 'cardiovascular',
        type: 'long-term',
      },
      {
        id: 'tomato-soup-5',
        title: 'Digestive Comfort',
        description: 'Warm soup can aid digestion and provide comfort, potentially alleviating mild digestive discomfort.',
        bodySystem: 'digestive',
        type: 'short-term',
      },
    ],
  },
];

export const defaultSubstance = substances[0];
