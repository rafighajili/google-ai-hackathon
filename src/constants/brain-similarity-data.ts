export type BrainSimilarityType = {
  full_name: string;
  gender: "K" | "Q";
  birthdate: string;
  brain_disease: "glioma_tumor" | "meningioma_tumor" | "pituitary_tumor";
  image: string;
  phone_number: string;
  main_page: string;
  additional_page: string;
};

export const BRAIN_SIMILARITIES: BrainSimilarityType[] = [
  {
    full_name: "Akif Əliyev",
    gender: "K",
    birthdate: "20/07/2000",
    brain_disease: "glioma_tumor",
    image: "/brain/glioma_tumor/gg-3.jpg",
    phone_number: "+994501234567",
    main_page:
      "Treatment Plan: Temozolomide chemotherapy, radiation therapy, dexamethasone for brain swelling, levetiracetam for seizure prevention\nFrequency: Temozolomide daily, dexamethasone as prescribed, levetiracetam daily\nMonitoring: Weekly medical check-ups, monthly MRI scans\nSupport System: Family and friends providing emotional support",
    additional_page:
      "Week 1 Progress Notes:\n\nTemozolomide commenced as scheduled, patient tolerated well without significant adverse effects.\nNo signs of allergic reactions to dexamethasone observed; patient reported reduction in headaches.\nPatient's seizure activity well-controlled on levetiracetam; no seizure episodes reported.\nScheduled MRI scan for next month to assess treatment response.\nWeek 2 Progress Notes:\n\nContinued compliance with temozolomide regimen; no missed doses reported.\nFollow-up medical check-up revealed stable vital signs and no concerning symptoms.\nDexamethasone dosage adjusted to manage swelling; patient reported improvement in neurological symptoms.\nPatient reported feeling supported by family and friends, maintaining positive outlook.\nWeek 3 Progress Notes:\n\nPatient experienced mild nausea and fatigue attributed to temozolomide; symptomatic relief provided.\nNo signs of hematologic toxicity observed on routine blood tests.\nLevetiracetam continued to effectively prevent seizure activity; no changes in dosage required.\nPatient expressed appreciation for ongoing support from loved ones.\nWeek 4 Progress Notes:\n\nTemozolomide dosage adjusted to minimize side effects; patient advised on symptom management strategies.\nMRI scan scheduled for next week to evaluate treatment response and assess tumor progression.\nPatient's resilience and determination noted during consultation; remains optimistic about treatment outcome.\nFamily involvement in patient care positively impacting emotional well-being and treatment adherence.\nWeek 5 Progress Notes:\n\nMRI scan revealed stable disease status; no evidence of tumor progression.\nPatient reported improved quality of life and decreased symptom burden.\nContinued support from family and friends noted as a significant factor in patient's coping and resilience.\nScheduled follow-up appointments and monitoring to continue according to treatment plan.",
  },
  {
    full_name: "Sevinc Vəliyeva",
    gender: "Q",
    birthdate: "12/08/1978",
    brain_disease: "glioma_tumor",
    image: "/brain/glioma_tumor/gg-4.jpg",
    phone_number: "+994552345678",
    main_page:
      "Treatment Plan: Surgical resection, adjuvant therapy (radiation therapy and chemotherapy)\nFrequency: Surgical resection followed by postoperative monitoring and adjuvant therapy as indicated\nMedications: Pain management (analgesics), corticosteroids (e.g., dexamethasone), antiepileptic drugs (e.g., levetiracetam), adjuvant chemotherapy (temozolomide)\nMonitoring: Regular neurosurgery and oncology follow-up appointments, imaging studies (e.g., MRI, CT scans)",
    additional_page:
      "Preoperative Evaluation Notes:\n\nComprehensive neurological evaluation confirms diagnosis of glioma tumor; neurosurgical consultation arranged.\nImaging studies (MRI, CT) reveal location and extent of glioma tumor, aiding in surgical planning.\nPain management initiated with analgesics; corticosteroids (dexamethasone) prescribed to manage peritumoral edema and minimize neurologic symptoms.\nSurgical Resection Notes:\n\nGross total resection of glioma tumor achieved via craniotomy, with intraoperative neurophysiological monitoring.\nPostoperative neurologic examination reveals no new deficits; pain management and wound care initiated.\nAntiepileptic drugs (e.g., levetiracetam) prescribed for seizure prophylaxis postoperatively.\nPostoperative Week 1 Progress Notes:\n\nPatient recovering well post-surgery; no signs of postoperative complications observed.\nHistopathological analysis confirms glioma tumor diagnosis and provides information on tumor grade.\nScheduled oncology consultation to discuss adjuvant therapy options, including radiation and chemotherapy.\nAdjuvant Therapy Initiation Notes:\n\nInitiated adjuvant therapy with concurrent radiation and temozolomide chemotherapy per standard protocol.\nRadiation therapy delivered using conformal techniques to target residual tumor bed and surrounding margins.\nChemotherapy regimen adjusted based on patient's tolerance and hematologic parameters.\nOngoing Monitoring and Support:\n\nRegular oncology follow-up appointments to monitor treatment response and assess for treatment-related side effects.\nImaging studies (MRI, CT) scheduled every 3 months to monitor for tumor recurrence or progression.\nPatient provided with psychosocial support resources and encouraged to engage in supportive care services.",
  },
  {
    full_name: "Polad Bayramlı",
    gender: "K",
    birthdate: "15/06/1975",
    brain_disease: "glioma_tumor",
    image: "/brain/glioma_tumor/gg-5.jpg",
    phone_number: "+994703456789",
    main_page:
      "Treatment Plan: Temozolomide chemotherapy, radiation therapy, dexamethasone for brain swelling, levetiracetam for seizure prevention\nFrequency: Temozolomide daily, dexamethasone as prescribed, levetiracetam daily\nMonitoring: Weekly medical check-ups, monthly MRI scans\n",
    additional_page:
      "Week 1 Progress Notes:\n\nTemozolomide commenced as scheduled; patient tolerated well without significant adverse effects.\nNo signs of allergic reactions to dexamethasone observed; patient reported reduction in headaches.\nLevetiracetam effectively controlled seizure activity; no episodes reported.\nScheduled MRI scan for next month to assess treatment response.\nWeek 2 Progress Notes:\n\nCompliance with temozolomide regimen continued; no missed doses reported.\nFollow-up medical check-up revealed stable vital signs and no concerning symptoms.\nDexamethasone dosage adjusted to manage swelling; improvement in neurological symptoms reported.\nPatient expressed feeling supported by family and friends, maintaining a positive outlook.\nWeek 3 Progress Notes:\n\nPatient experienced mild nausea and fatigue attributed to temozolomide; symptomatic relief provided.\nNo signs of hematologic toxicity observed on routine blood tests.\nLevetiracetam dosage unchanged; effective prevention of seizure activity noted.\nPatient expressed appreciation for ongoing support from loved ones.\nWeek 4 Progress Notes:\n\nTemozolomide dosage adjusted to minimize side effects; patient advised on symptom management strategies.\nMRI scan scheduled for next week to evaluate treatment response and assess tumor progression.\nPatient's resilience and determination noted during consultation; remains optimistic about treatment outcome.\nFamily involvement in patient care positively impacting emotional well-being and treatment adherence.\nWeek 5 Progress Notes:\n\nMRI scan revealed stable disease status; no evidence of tumor progression.\nPatient reported improved quality of life and decreased symptom burden.\nContinued support from family and friends noted as a significant factor in patient's coping and resilience.\nScheduled follow-up appointments and monitoring to continue according to treatment plan.",
  },
  {
    full_name: "Aygün Əliyeva\n",
    gender: "Q",
    birthdate: "03/09/1989",
    brain_disease: "glioma_tumor",
    image: "/brain/glioma_tumor/gg-6.jpg",
    phone_number: "+994774567890",
    main_page:
      "Treatment Plan: Temozolomide chemotherapy, radiation therapy, dexamethasone for brain swelling, levetiracetam for seizure prevention\nFrequency: Temozolomide daily, dexamethasone as prescribed, levetiracetam daily\nMonitoring: Weekly medical check-ups, quarterly MRI scans",
    additional_page:
      "Week 1 Progress Notes:\n\nTemozolomide commenced as prescribed; patient experienced minimal side effects.\nNo adverse reactions to dexamethasone observed; patient reported headache reduction.\nLevetiracetam effectively managed seizure activity; no episodes reported.\nMRI scheduled for next month to evaluate treatment response.\nWeek 2 Progress Notes:\n\nContinued compliance with temozolomide regimen; no missed doses.\nStable vital signs and absence of concerning symptoms during medical check-up.\nDexamethasone dosage adjusted for swelling; patient noted neurological improvement.\nPatient expressed gratitude for familial support, contributing to positive outlook.\nWeek 3 Progress Notes:\n\nPatient experienced mild nausea and fatigue from temozolomide; symptomatic relief provided.\nNormal hematologic profile observed on routine blood tests.\nLevetiracetam dosage remained unchanged; effective seizure prevention maintained.\nPatient appreciated ongoing support from loved ones.\nWeek 4 Progress Notes:\n\nTemozolomide dosage adjusted for improved tolerability; symptom management strategies discussed.\nMRI scan scheduled for next week to monitor treatment response and tumor progression.\nPatient's determination and optimism noted during consultation.\nFamily involvement positively influencing emotional well-being and treatment adherence.\nWeek 5 Progress Notes:\n\nMRI scan showed stable disease status; no tumor progression detected.\nPatient reported enhanced quality of life and reduced symptom burden.\nContinued family and friend support acknowledged for aiding patient's resilience.\nScheduled follow-up appointments and monitoring to proceed according to treatment plan.",
  },
  {
    full_name: "Səbuhi Əliyev\n",
    gender: "K",
    birthdate: "12/06/1998",
    brain_disease: "meningioma_tumor",
    image: "/brain/meningioma_tumor/m-2.jpg",
    phone_number: "+994505678901",
    main_page:
      "Treatment Plan: Bevacizumab therapy, radiotherapy, corticosteroids for edema, anticonvulsants for seizure control\nFrequency: Bevacizumab as per protocol, corticosteroids as prescribed, anticonvulsants daily\nMonitoring: Biweekly medical evaluations, monthly MRI scans",
    additional_page:
      "Week 1 Progress Notes:\n\nBevacizumab treatment initiated as planned; patient experienced minimal side effects.\nNo adverse reactions observed with corticosteroids; patient reported decreased edema-related symptoms.\nAnticonvulsants effectively managed seizure activity; patient remained seizure-free.\nMRI scheduled for next month to assess response to treatment.\nWeek 2 Progress Notes:\n\nContinued adherence to bevacizumab regimen; no missed doses reported.\nStable vital signs and absence of concerning symptoms during biweekly evaluations.\nCorticosteroid dosage adjusted for optimal edema management; patient noted improvement in symptoms.\nPatient expressed gratitude for the supportive presence of family and friends.\nWeek 3 Progress Notes:\n\nPatient experienced mild fatigue attributed to bevacizumab; symptomatic relief provided.\nRoutine blood tests revealed normal hematologic parameters.\nAnticonvulsant dosage remained stable; continued prevention of seizure activity observed.\nPatient expressed appreciation for the ongoing support received.\nWeek 4 Progress Notes:\n\nBevacizumab dosage adjusted to enhance tolerability; symptom management strategies discussed.\nMRI scan scheduled for next week to monitor treatment response and tumor progression.\nPatient's resilience and optimism were evident during consultation.\nFamily involvement continued to positively impact emotional well-being and treatment adherence.\nWeek 5 Progress Notes:\n\nMRI scan demonstrated stable disease status; no evidence of tumor progression.\nPatient reported improved quality of life and reduced symptom burden.\nContinued support from family and friends noted as vital for patient's coping and resilience.\nScheduled follow-up appointments and monitoring to proceed according to treatment plan.\n\n\n\n\n",
  },
  {
    full_name: "Toğrul Əhmədov\n",
    gender: "K",
    birthdate: "10/14/1998",
    brain_disease: "meningioma_tumor",
    image: "/brain/meningioma_tumor/m-3.jpg",
    phone_number: "+994556789012",
    main_page:
      "Treatment Plan: Bromocriptine therapy, radiation therapy, corticosteroids for swelling, antiepileptic drugs for seizure prevention\nFrequency: Bromocriptine as directed, corticosteroids as prescribed, antiepileptic drugs daily\nMonitoring: Monthly endocrinology assessments, biannual MRI scans",
    additional_page:
      "Week 1 Progress Notes:\n\nBromocriptine therapy initiated as planned; patient experienced mild side effects.\nCorticosteroids administered to manage swelling; patient noted reduction in symptoms.\nAntiepileptic drugs effectively controlled seizure activity; patient remained seizure-free.\nMRI scheduled for next month to evaluate treatment response.\nWeek 2 Progress Notes:\n\nAdherence to bromocriptine regimen continued; side effects well-tolerated.\nStable endocrine parameters observed during monthly assessments.\nCorticosteroid dosage adjusted for optimal symptom management; patient reported improvement.\nPatient expressed gratitude for the unwavering support of family and friends.\nWeek 3 Progress Notes:\n\nPatient experienced mild fatigue attributed to bromocriptine; symptomatic relief provided.\nRoutine endocrinology tests showed normal hormonal levels.\nAntiepileptic drug dosage remained stable; continued prevention of seizure activity observed.\nPatient conveyed appreciation for the ongoing support received.\nWeek 4 Progress Notes:\n\nBromocriptine dosage adjusted to enhance tolerability; symptom management strategies discussed.\nMRI scan scheduled for next week to monitor treatment response and tumor progression.\nPatient's resilience and optimism noted during consultation.\nFamily involvement continued to positively impact emotional well-being and treatment adherence.\nWeek 5 Progress Notes:\n\nMRI scan revealed stable disease status; no evidence of tumor progression.\nPatient reported improved quality of life and decreased symptom burden.\nContinued support from family and friends noted as vital for patient's coping and resilience.\nScheduled follow-up appointments and monitoring to proceed according to treatment plan.",
  },
  {
    full_name: "Günel Şirinova\n",
    gender: "Q",
    birthdate: "12/14/1978",
    brain_disease: "meningioma_tumor",
    image: "/brain/meningioma_tumor/m-4.jpg",
    phone_number: "+994707890123",
    main_page:
      "Treatment Plan: Surgical resection, radiation therapy, adjuvant therapy (if needed)\nFrequency: Surgery followed by postoperative monitoring and adjuvant therapy as indicated\nMonitoring: Postoperative follow-up appointments, imaging studies (e.g., MRI, CT scans)",
    additional_page:
      "Postoperative Day 1 Progress Notes:\n\nSuccessful surgical resection of meningioma tumor performed without complications.\nPostoperative neurological examination reveals intact motor and sensory functions.\nScheduled postoperative MRI scan to assess extent of tumor resection and presence of residual disease.\nPostoperative Week 1 Progress Notes:\n\nPatient recovering well post-surgery; pain management and wound care measures initiated.\nEarly mobilization encouraged to prevent postoperative complications and promote recovery.\nFamily updated on patient's condition and encouraged to provide emotional support during recovery period.\nPostoperative Week 2 Progress Notes:\n\nNeurological examination remains stable; no signs of postoperative complications observed.\nPatient referred to radiation oncology for adjuvant therapy planning, pending MRI results.\nSupportive care team engaged to address any psychosocial needs and enhance coping strategies.\nPostoperative Week 4 Progress Notes:\n\nMRI scan confirms gross total resection of meningioma tumor; no evidence of residual disease.\nRadiation therapy consultation scheduled to discuss treatment course and potential side effects.\nPatient encouraged to maintain regular follow-up appointments for long-term monitoring and surveillance.\nPost-treatment Follow-Up Notes:\n\nCompletion of adjuvant radiation therapy achieved without significant adverse effects.\nRegular imaging studies scheduled every 6 months to monitor for tumor recurrence or progression.\nPatient expresses gratitude for the support received from family and friends throughout the treatment journey.\nPrognosis remains favorable with successful surgical resection and adjuvant therapy, emphasizing the importance of ongoing surveillance for early detection of any recurrence.",
  },
  {
    full_name: "İlham Abbaslı\n",
    gender: "K",
    birthdate: "03/01/1979",
    brain_disease: "meningioma_tumor",
    image: "/brain/meningioma_tumor/m-5.jpg",
    phone_number: "+994778901234",
    main_page:
      "Treatment Plan: Surgical resection, adjuvant therapy (radiation therapy), symptomatic management\nFrequency: Surgical resection followed by postoperative monitoring and adjuvant therapy as indicated\nMedications: Analgesics, corticosteroids (e.g., dexamethasone), antiepileptic drugs (e.g., levetiracetam), proton pump inhibitors (e.g., pantoprazole)\nMonitoring: Regular neurosurgery and oncology follow-up appointments, imaging studies (e.g., MRI, CT scans)",
    additional_page:
      "Preoperative Evaluation Notes:\n\nComprehensive neurological evaluation confirms diagnosis of meningioma tumor; neurosurgical consultation arranged.\nImaging studies (MRI, CT) reveal location and characteristics of meningioma, aiding in surgical planning.\nSymptomatic management initiated with analgesics for headache relief; corticosteroids (dexamethasone) prescribed to reduce peritumoral edema and neurologic symptoms.\nSurgical Resection Notes:\n\nGross total resection of meningioma tumor achieved via craniotomy, with preservation of surrounding neurovascular structures.\nPostoperative neurologic examination reveals no new deficits; pain management and wound care initiated.\nAntiepileptic drugs (e.g., levetiracetam) prescribed for seizure prophylaxis postoperatively.\nPostoperative Week 1 Progress Notes:\n\nPatient recovering well post-surgery; no signs of postoperative complications observed.\nHistopathological analysis confirms meningioma tumor diagnosis and provides information on tumor grade and histology.\nScheduled oncology consultation to discuss adjuvant therapy options, including radiation therapy.\nAdjuvant Therapy Initiation Notes:\n\nInitiated adjuvant radiation therapy to target any residual tumor cells and reduce risk of recurrence.\nRadiation therapy delivered using conformal techniques to spare adjacent normal tissues and minimize toxicity.\nProton pump inhibitors (e.g., pantoprazole) prescribed for gastrointestinal protection during radiation therapy.\nOngoing Monitoring and Support:\n\nRegular oncology follow-up appointments to monitor treatment response and assess for treatment-related side effects.\nImaging studies (MRI, CT) scheduled at regular intervals to monitor for tumor recurrence or progression.\nPatient provided with psychosocial support resources and encouraged to engage in supportive care services.",
  },
  {
    full_name: "Natəvan Əliyeva",
    gender: "Q",
    birthdate: "12/06/1978",
    brain_disease: "pituitary_tumor",
    image: "/brain/pituitary_tumor/p-19.jpg",
    phone_number: "+994509012345",
    main_page:
      "Treatment Plan: Surgery, adjuvant radiation therapy, corticosteroids for swelling, antiepileptic drugs for seizure prevention\nFrequency: Surgical intervention followed by radiation therapy as prescribed, corticosteroids as needed, antiepileptic drugs daily\nMonitoring: Weekly postoperative assessments, monthly imaging scans",
    additional_page:
      "Week 1 Progress Notes:\n\nPatient underwent successful surgery; recovery progressing as expected.\nCorticosteroids administered to manage postoperative swelling; patient reported relief.\nAntiepileptic drugs prescribed for seizure prevention; no seizure activity observed.\nFollow-up imaging scheduled for next month to evaluate treatment response.\nWeek 2 Progress Notes:\n\nSurgical site healing well; no signs of infection noted during postoperative assessments.\nCorticosteroid dosage adjusted based on swelling; patient noted improvement in symptoms.\nAntiepileptic drug regimen maintained; continued prevention of seizure activity observed.\nPatient expressed gratitude for the support received from family and friends.\nWeek 3 Progress Notes:\n\nPatient reported mild fatigue, typical during recovery; encouraged to rest.\nRoutine postoperative assessments showed satisfactory progress.\nAntiepileptic drug dosage remained stable; no seizure recurrence observed.\nPatient appreciated the ongoing support from loved ones.\nWeek 4 Progress Notes:\n\nPostoperative recovery progressing well; patient resumed daily activities with caution.\nFollow-up imaging scheduled for next week to assess treatment response and tumor progression.\nPatient's positive attitude and determination noted during consultation.\nFamily involvement continued to positively impact emotional well-being and recovery.\nWeek 5 Progress Notes:\n\nImaging scan revealed satisfactory treatment response; no evidence of tumor recurrence.\nPatient reported improved quality of life and decreased postoperative symptoms.\nContinued support from family and friends noted as vital for patient's emotional well-being.\nScheduled follow-up appointments and monitoring to proceed according to treatment plan.",
  },
  {
    full_name: "Fərman Məmmədli\n",
    gender: "K",
    birthdate: "12/21/1978",
    brain_disease: "pituitary_tumor",
    image: "/brain/pituitary_tumor/p-20.jpg",
    phone_number: "+994550123456",
    main_page:
      "Treatment Plan: Medication therapy, surgical resection, radiation therapy (if needed)\nFrequency: Initial medication therapy followed by surgical evaluation; postoperative monitoring and adjuvant therapy as indicated\nMonitoring: Regular endocrinology follow-up appointments, imaging studies (e.g., MRI, CT scans)",
    additional_page:
      "Treatment Initiation Notes:\n\nInitiated dopamine agonist therapy (e.g., cabergoline, bromocriptine) for prolactin-secreting pituitary adenoma, aiming to normalize hormone levels and reduce tumor size.\nPatient education provided on medication adherence, potential side effects, and expected treatment outcomes.\nScheduled endocrinology follow-up appointments to monitor hormone levels and treatment response.\nSurgical Evaluation Notes:\n\nContinued monitoring of pituitary tumor response to medication therapy through regular imaging studies.\nSurgical resection considered for non-responsive or symptomatic pituitary adenomas; referral to neurosurgery for evaluation.\nPatient counseled on potential risks and benefits of surgical intervention, including postoperative hormone management.\nPostoperative Day 1 Progress Notes:\n\nSuccessful transsphenoidal resection of pituitary tumor performed with preservation of pituitary function.\nEarly postoperative endocrinology evaluation to assess hormonal status and initiate hormone replacement therapy as needed.\nNeurological examination reveals no postoperative deficits; pain management and wound care initiated.\nPostoperative Week 1 Progress Notes:\n\nEndocrinology follow-up confirms stable hormone levels post-surgery; hormone replacement therapy adjusted accordingly.\nNeurological examination remains stable; patient advised on gradual return to normal activities.\nScheduled postoperative MRI scan to assess extent of tumor resection and presence of residual disease.\nAdjuvant Therapy and Long-term Follow-Up:\n\nAdjuvant radiation therapy considered for residual or recurrent pituitary adenomas, pending postoperative imaging results.\nLong-term endocrinology follow-up appointments scheduled to monitor pituitary function and hormone levels.\nPatient encouraged to maintain regular follow-up visits for surveillance and early detection of tumor recurrence or hormonal imbalance.",
  },
  {
    full_name: "Könül Hüseynova",
    gender: "Q",
    birthdate: "03/06/1980",
    brain_disease: "pituitary_tumor",
    image: "/brain/pituitary_tumor/p-21.jpg",
    phone_number: "+994701234567",
    main_page:
      "Treatment Plan: Surgical resection, adjuvant therapy (radiation therapy and chemotherapy)\nFrequency: Surgical resection followed by postoperative monitoring and adjuvant therapy as indicated\nMedications: Pain management (analgesics), corticosteroids (e.g., dexamethasone), antiepileptic drugs (e.g., levetiracetam), adjuvant chemotherapy (temozolomide)\nMonitoring: Regular neurosurgery and oncology follow-up appointments, imaging studies (e.g., MRI, CT scans)",
    additional_page:
      "Week 1 Progress Notes:\n\nTemozolomide commenced as scheduled, and the patient tolerated it well without significant adverse effects.\nNo signs of allergic reactions to dexamethasone were observed, and the patient reported a reduction in headaches.\nLevetiracetam effectively controlled the patient's seizure activity, with no episodes reported.\nA scheduled MRI scan for the next month was planned to assess treatment response.\nWeek 2 Progress Notes:\n\nThe patient continued to comply with the temozolomide regimen, with no missed doses reported.\nFollow-up medical check-up revealed stable vital signs and no concerning symptoms.\nDexamethasone dosage was adjusted to manage swelling, leading to improvement in neurological symptoms.\nThe patient reported feeling supported by family and friends, maintaining a positive outlook.\nWeek 3 Progress Notes:\n\nThe patient experienced mild nausea and fatigue attributed to temozolomide, for which symptomatic relief was provided.\nNo signs of hematologic toxicity were observed on routine blood tests.\nLevetiracetam continued to effectively prevent seizure activity, with no changes in dosage required.\nThe patient expressed appreciation for ongoing support from loved ones.\nWeek 4 Progress Notes:\n\nTemozolomide dosage was adjusted to minimize side effects, and the patient was advised on symptom management strategies.\nAn MRI scan scheduled for the next week to evaluate treatment response and assess tumor progression.\nThe patient's resilience and determination were noted during consultation, and they remained optimistic about the treatment outcome.\nFamily involvement in patient care positively impacted emotional well-being and treatment adherence.\nWeek 5 Progress Notes:\n\nAn MRI scan revealed stable disease status, with no evidence of tumor progression.\nThe patient reported an improved quality of life and decreased symptom burden.\nContinued support from family and friends was noted as a significant factor in the patient's coping and resilience.\nScheduled follow-up appointments and monitoring were to continue according to the treatment plan.",
  },
];
