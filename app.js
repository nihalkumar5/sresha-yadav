/**
 * Academic Portfolio Site-Wide Logic
 * Dr. Sresha Yadav — IIIT Naya Raipur
 */

// --- Citations Database ---
const citations = {
  "pub-1": {
    title: "Team-member exchange and innovative work behaviour",
    apa: "Ghosh, V., Bharadwaja, M., Yadav, S., & Kabra, G. (2021). Team-member exchange and innovative work behaviour: The role of psychological empowerment and creative self-efficacy. International Journal of Innovation Science, 13(4), 481-499.",
    bibtex: `@article{ghosh2021teammember,
  title={Team-member exchange and innovative work behaviour: The role of psychological empowerment and creative self-efficacy},
  author={Ghosh, Vinit and Bharadwaja, Manaswita and Yadav, Sresha and Kabra, Gaurav},
  journal={International Journal of Innovation Science},
  volume={13},
  number={4},
  pages={481--499},
  year={2021},
  publisher={Emerald Publishing Limited},
  doi={10.1108/IJIS-09-2020-0164}
}`
  },
  "pub-3": {
    title: "Impact of Perceived Stress on General Health",
    apa: "Ghosh, S., Ghosh, V., & Kumar, I. (2018). Impact of Perceived Stress on General Health: A Study on Engineering Students. PEOPLE: International Journal of Social Sciences, 4(2), 1084-1096.",
    bibtex: `@article{ghosh2018stress,
  title={Impact of Perceived Stress on General Health: A Study on Engineering Students},
  author={Ghosh, Sresha and Ghosh, Vinit and Kumar, I.},
  journal={PEOPLE: International Journal of Social Sciences},
  volume={4},
  number={2},
  pages={1084--1096},
  year={2018},
  doi={10.20319/pijss.2018.42.10841096}
}`
  },
  "pub-4": {
    title: "Eye-Tracking Technology & Font Types Reading Efficiency",
    apa: "Tripathi, D., Raj, Y., Singh, A., & Yadav, S. (2023). Using Eye-Tracking Technology to Study the Impact of Font Types on Online Reading Efficiency. HCI & Digital Pedagogies Colloquium.",
    bibtex: `@inproceedings{tripathi2023eyetracking,
  title={Using Eye-Tracking Technology to Study the Impact of Font Types on Online Reading Efficiency},
  author={Tripathi, Dhyanendra and Raj, Yash and Singh, Anurag and Yadav, Sresha},
  booktitle={HCI \\& Digital Pedagogies Colloquium},
  year={2023}
}`
  },
  "pub-5": {
    title: "Influence Tactics Used by Entrepreneurs",
    apa: "Singh, L., & Yadav, S. (2020). A Study of Influence Tactics Used by Entrepreneurs. AMC Indian Journal of Entrepreneurship, 5(2), 24-38.",
    bibtex: `@article{singh2020influence,
  title={A Study of Influence Tactics Used by Entrepreneurs},
  author={Singh, Lakshaya and Yadav, Sresha},
  journal={AMC Indian Journal of Entrepreneurship},
  volume={5},
  number={2},
  pages={24--38},
  year={2020},
  doi={10.17010/amcije/2020/v5i2/152918}
}`
  },
  "pub-6": {
    title: "Emancipation of Women in Tagore's The Wife's Letter",
    apa: "Ghosh, S. (2017). Emancipation of Women in Tagore's The Wife's Letter (Streer Patra). Journal of Teaching and Research in English Literature, 9(2), 14-22.",
    bibtex: `@article{ghosh2017tagore,
  title={Emancipation of Women in Tagore's The Wife's Letter (Streer Patra)},
  author={Ghosh, Sresha},
  journal={Journal of Teaching and Research in English Literature},
  volume={9},
  number={2},
  pages={14--22},
  year={2017}
}`
  },
  "pub-7": {
    title: "An Ecocritical Reading of Ruskin Bond's Our Trees Still Grow in Dehra",
    apa: "Ghosh, S. (2016). An Ecocritical Reading of Ruskin Bond's Our Trees Still Grow in Dehra. Gnosis: International Journal of English Language and Literature, 1(3), 45-56.",
    bibtex: `@article{ghosh2016bond,
  title={An Ecocritical Reading of Ruskin Bond's Our Trees Still Grow in Dehra},
  author={Ghosh, Sresha},
  journal={Gnosis: International Journal of English Language and Literature},
  volume={1},
  number={3},
  pages={45--56},
  year={2016}
}`
  },
  "pub-8": {
    title: "Best Paper Award — ICCPE 2024",
    apa: "Yadav, S. (2024). Interdisciplinary Perspectives in Computational Humanities and Social Behavior. In Proceedings of the International Conference on Communication, Psychology, and Education (ICCPE 2024). [Best Paper Award].",
    bibtex: `@inproceedings{yadav2024iccpe,
  title={Interdisciplinary Perspectives in Computational Humanities and Social Behavior},
  author={Yadav, Sresha},
  booktitle={Proceedings of the International Conference on Communication, Psychology, and Education (ICCPE 2024)},
  year={2024},
  note={Best Paper Award}
}`
  },
  "pub-j0": {
    title: "Gastroethnic Postmemory: Partition and Diaspora Migrant Memoirs through Bengali Foodscapes",
    apa: "Yadav, S. (2026). Gastroethnic Postmemory: Partition and Diaspora Migrant Memoirs through Bengali Foodscapes. Food Studies: An Interdisciplinary Journal, Common Ground Research Networks. https://doi.org/10.18848/2160-1933/CGP/A257",
    bibtex: `@article{yadav2026gastroethnic,
  title={Gastroethnic Postmemory: Partition and Diaspora Migrant Memoirs through Bengali Foodscapes},
  author={Yadav, Sresha},
  journal={Food Studies: An Interdisciplinary Journal},
  publisher={Common Ground Research Networks},
  year={2026},
  doi={10.18848/2160-1933/CGP/A257}
}`
  },
  "pub-j1": {
    title: "Thematic Analysis of Advertisement Using NVivo",
    apa: "Yadav, S. (2026). Thematic Analysis of Advertisement Using NVivo. IEEE Xplore. https://doi.org/10.1109/GCON69192.2026.11648868",
    bibtex: `@article{yadav2026thematic,
  title={Thematic Analysis of Advertisement Using NVivo},
  author={Yadav, Sresha},
  journal={IEEE Xplore},
  year={2026},
  doi={10.1109/GCON69192.2026.11648868}
}`
  },
  "pub-j2": {
    title: "Women Unwriting Patriarchy",
    apa: "Yadav, S. (2026). Women Unwriting Patriarchy: Abortion, Memory, and Female Identity in Two Canadian Novels—Margaret Atwood's Surfacing (1972) and Marian Engel's Sarah Bastard's Notebook (1974). Canadian Journal of Language and Literature Studies (CJLLS), 6(2), 77–90. https://doi.org/10.53103/cjlls.v6i2.269",
    bibtex: `@article{yadav2026women,
  title={Women Unwriting Patriarchy: Abortion, Memory, and Female Identity in Two Canadian Novels---Margaret Atwood's Surfacing (1972) and Marian Engel's Sarah Bastard's Notebook (1974)},
  author={Yadav, Sresha},
  journal={Canadian Journal of Language and Literature Studies},
  volume={6},
  number={2},
  pages={77--90},
  year={2026},
  doi={10.53103/cjlls.v6i2.269}
}`
  },
  "pub-j3": {
    title: "The Scarlet Brand: Shame, Identity, and the Commodification of Women's Bodies",
    apa: "Yadav, S. (2026). The Scarlet Brand: Shame, Identity, and the Commodification of Women's Bodies in Hillary Jordan's When She Woke. Canadian Journal of Language and Literature Studies (CJLLS), 6(3), 1–19. https://doi.org/10.53103/cjlls.v6i3.275",
    bibtex: `@article{yadav2026scarlet,
  title={The Scarlet Brand: Shame, Identity, and the Commodification of Women's Bodies in Hillary Jordan's When She Woke},
  author={Yadav, Sresha},
  journal={Canadian Journal of Language and Literature Studies},
  volume={6},
  number={3},
  pages={1--19},
  year={2026},
  doi={10.53103/cjlls.v6i3.275}
}`
  },
  "pub-j4": {
    title: "Reproductive Rights Are Human Rights",
    apa: "Yadav, S. (Accepted). Reproductive Rights Are Human Rights: Usurp of Female Agency and Trauma of Politicized Bodies. Routledge, Taylor and Francis.",
    bibtex: `@article{yadav_reproductiverights,
  title={Reproductive Rights Are Human Rights: Usurp of Female Agency and Trauma of Politicized Bodies},
  author={Yadav, Sresha},
  journal={Routledge Publication, Taylor and Francis},
  note={Accepted for Publication}
}`
  },
  "pub-j5": {
    title: "The Happiness Paradox: Relationship Status on Well-Being of Engineering Students",
    apa: "Yadav, S. (2025). The Happiness Paradox: The Influence of Relationship Status on Well-Being of Undergraduate Engineering Students. Recent Educational and Psychological Researches. https://doi.org/10.5281/zenodo.15773265",
    bibtex: `@article{yadav2025happiness,
  title={The Happiness Paradox: The Influence of Relationship Status on Well-Being of Undergraduate Engineering Students},
  author={Yadav, Sresha},
  journal={Recent Educational and Psychological Researches},
  year={2025},
  doi={10.5281/zenodo.15773265}
}`
  },
  "pub-j6": {
    title: "A Study on the Role of Personality on Individual's Stylistic Choices",
    apa: "Yadav, S. (2024). A Study on the Role of Personality and Associated Factors on Individual's Stylistic Choices. International Journal of Cognitive and Ergonomic Education (IJCEE), 13(1), 133–137. https://doi.org/10.1018/IJCEE.2025.13.1.646",
    bibtex: `@article{yadav2024personality,
  title={A Study on the Role of Personality and Associated Factors on Individual's Stylistic Choices},
  author={Yadav, Sresha},
  journal={International Journal of Cognitive and Ergonomic Education},
  volume={13},
  number={1},
  pages={133--137},
  year={2024},
  doi={10.1018/IJCEE.2025.13.1.646}
}`
  },
  "pub-j8": {
    title: "The Role of Students' Perception of Classroom Atmospherics on Second Language Learning",
    apa: "Yadav, S. (2022). The Role of Students' Perception of Classroom Atmospherics on Second Language Learning. European Journal of Behavioural Sciences, 4(4), 40–47.",
    bibtex: `@article{yadav2022classroom,
  title={The Role of Students' Perception of Classroom Atmospherics on Second Language Learning},
  author={Yadav, Sresha},
  journal={European Journal of Behavioural Sciences},
  volume={4},
  number={4},
  pages={40--47},
  year={2022}
}`
  },
  "pub-j12": {
    title: "Exploring Socio-Environmental Dimensions in Arvind Adiga's The White Tiger",
    apa: "Ghosh (Yadav), S. (2015). Exploring Socio-Environmental Dimensions in Arvind Adiga's The White Tiger. Subaltern Speak: An International Journal of Postcolonial Studies, 4(1), 76–81.",
    bibtex: `@article{ghosh2015whitetiger,
  title={Exploring Socio-Environmental Dimensions in Arvind Adiga's The White Tiger},
  author={Ghosh (Yadav), Sresha},
  journal={Subaltern Speak: An International Journal of Postcolonial Studies},
  volume={4},
  number={1},
  pages={76--81},
  year={2015}
}`
  },
  "pub-j14": {
    title: "Quest for Identity: A Study of Anita Nair's Cut-like Wound",
    apa: "Ghosh (Yadav), S. (2014). Quest for Identity: A Study of Anita Nair's Cut-like Wound. Asian Journal of English Studies, 3(1), 208–213.",
    bibtex: `@article{ghosh2014anitanair,
  title={Quest for Identity: A Study of Anita Nair's Cut-like Wound},
  author={Ghosh (Yadav), Sresha},
  journal={Asian Journal of English Studies},
  volume={3},
  number={1},
  pages={208--213},
  year={2014}
}`
  },
  "pub-j15": {
    title: "Graham Greene's The Power and the Glory: An Interdisciplinary Perspective",
    apa: "Ghosh (Yadav), S. (2013). Graham Greene's The Power and the Glory: An Interdisciplinary Perspective. Re-Markings, 12(12), 94–99.",
    bibtex: `@article{ghosh2013greene,
  title={Graham Greene's The Power and the Glory: An Interdisciplinary Perspective},
  author={Ghosh (Yadav), Sresha},
  journal={Re-Markings},
  volume={12},
  number={12},
  pages={94--99},
  year={2013}
}`
  },
  "pub-j16": {
    title: "A Study of Graham Greene's Brighton Rock: Case-History of a Killer",
    apa: "Ghosh (Yadav), S. (2012). A Study of Graham Greene's Brighton Rock: Case-History of a Killer. Atlantic Literary Review (Quarterly), 13(4), 30–36.",
    bibtex: `@article{ghosh2012brighton,
  title={A Study of Graham Greene's Brighton Rock: Case-History of a Killer},
  author={Ghosh (Yadav), Sresha},
  journal={Atlantic Literary Review},
  volume={13},
  number={4},
  pages={30--36},
  year={2012}
}`
  },
  "pub-j17": {
    title: "Victim of Fate or Choice: A Study of Greene's The Heart of the Matter",
    apa: "Ghosh (Yadav), S. (2012). Victim of Fate or Choice: A Study of Greene's The Heart of the Matter. 3L: The Southeast Asian Journal of English Language Studies, 18(4), 59–66.",
    bibtex: `@article{ghosh2012heart,
  title={Victim of Fate or Choice: A Study of Greene's The Heart of the Matter},
  author={Ghosh (Yadav), Sresha},
  journal={3L: The Southeast Asian Journal of English Language Studies},
  volume={18},
  number={4},
  pages={59--66},
  year={2012}
}`
  },
  "pub-j18": {
    title: "Major Trends of Criticism Regarding Graham Greene's Novels",
    apa: "Ghosh (Yadav), S. (2012). Major Trends of Criticism Regarding Graham Greene's Novels. Atlantic Literary Review (Quarterly), 13(2), 38–51.",
    bibtex: `@article{ghosh2012greene_trends,
  title={Major Trends of Criticism Regarding Graham Greene's Novels},
  author={Ghosh (Yadav), Sresha},
  journal={Atlantic Literary Review},
  volume={13},
  number={2},
  pages={38--51},
  year={2012}
}`
  },
  "pub-j19": {
    title: "Exploring Criminological Perspectives in Anita Desai's Cry, The Peacock",
    apa: "Ghosh (Yadav), S. (2011). Exploring Criminological Perspectives in Anita Desai's Cry, The Peacock. The IUP Journal of English Studies, 6(3), 51–55.",
    bibtex: `@article{ghosh2011desai,
  title={Exploring Criminological Perspectives in Anita Desai's Cry, The Peacock},
  author={Ghosh (Yadav), Sresha},
  journal={The IUP Journal of English Studies},
  volume={6},
  number={3},
  pages={51--55},
  year={2011}
}`
  },
  "pub-j20": {
    title: "A Framework for Authorship Identification of Questioned Document",
    apa: "Ghosh (Yadav), S. (2011). A Framework for Authorship Identification of Questioned Document: Forensic and Linguistic Convergence. Modern Journal of Applied Linguistics (MJAL), 3(1), 1–7.",
    bibtex: `@article{ghosh2011authorship,
  title={A Framework for Authorship Identification of Questioned Document: Forensic and Linguistic Convergence},
  author={Ghosh (Yadav), Sresha},
  journal={Modern Journal of Applied Linguistics},
  volume={3},
  number={1},
  pages={1--7},
  year={2011}
}`
  },
  "pub-j21": {
    title: "Character Analysis of Andrews in Graham Greene's The Man Within",
    apa: "Ghosh (Yadav), S. (2010). Character Analysis of Andrews in Graham Greene's The Man Within. Language in India, 10(12), 227–233.",
    bibtex: `@article{ghosh2010andrews,
  title={Character Analysis of Andrews in Graham Greene's The Man Within},
  author={Ghosh (Yadav), Sresha},
  journal={Language in India},
  volume={10},
  number={12},
  pages={227--233},
  year={2010}
}`
  },
  "pub-b1": {
    title: "Babies or Biological Assets: Bioethical Rendition of Foetal Farming",
    apa: "Yadav, S. (2025). Babies or Biological Assets: Bioethical Rendition of Foetal Farming to Decelerate Ageing as Showcased in the Movie Yashoda. In Experience, Imagination and Beyond: Reflections for a Sustainable Tomorrow (pp. 131–140). ISBN: 978-81-95848348.",
    bibtex: `@incollection{yadav2025babies,
  title={Babies or Biological Assets: Bioethical Rendition of Foetal Farming to Decelerate Ageing as Showcased in the Movie Yashoda},
  author={Yadav, Sresha},
  booktitle={Experience, Imagination and Beyond: Reflections for a Sustainable Tomorrow},
  pages={131--140},
  year={2025},
  isbn={978-81-95848348}
}`
  },
  "pub-b2": {
    title: "Reproductive Rights Are Human Rights: Usurp of Female Agency",
    apa: "Yadav, S. (2025). Reproductive Rights Are Human Rights: Usurp of Female Agency and Trauma of Politicized Bodies. Routledge Publication.",
    bibtex: `@incollection{yadav2025reproductive,
  title={Reproductive Rights Are Human Rights: Usurp of Female Agency and Trauma of Politicized Bodies},
  author={Yadav, Sresha},
  booktitle={Routledge Critical Studies in Gender and Human Rights},
  publisher={Routledge},
  year={2025}
}`
  },
  "pub-b3": {
    title: "An Exploratory Study to Assess Language Preference of a Multilingual Individual",
    apa: "Yadav, S. (2022). An Exploratory Study to Assess Language Preference of a Multilingual Individual to Perform Cognitive Tasks. In I. Roychowdhury & S. Narula (Eds.), Language, Culture and Digital Media. Amity University Publication. ISBN: 978-93-5445-104-1.",
    bibtex: `@incollection{yadav2022languagepreference,
  title={An Exploratory Study to Assess Language Preference of a Multilingual Individual to Perform Cognitive Tasks},
  author={Yadav, Sresha},
  editor={Roychowdhury, Iti and Narula, Sumit},
  booktitle={Language, Culture and Digital Media},
  publisher={Amity University Publication},
  isbn={978-93-5445-104-1}
}`
  },
  "pub-b4": {
    title: "Reshaping Mind and Behaviour: Media and its Impacts",
    apa: "Yadav, S. (2012). Reshaping Mind and Behaviour: Media and its Impacts. In G. P. Agrawal, H. Khanna, A. P. Tripathi, & P. Shukla (Eds.), Media and New World Order (pp. 194–199). Wisdom Publications. ISBN: 978-93-81505-19-9.",
    bibtex: `@incollection{yadav2012reshaping,
  title={Reshaping Mind and Behaviour: Media and its Impacts},
  author={Yadav, Sresha},
  editor={Agrawal, G. P. and Khanna, Harish and Tripathi, Aditya P. and Shukla, Preeti},
  booktitle={Media and New World Order},
  pages={194--199},
  publisher={Wisdom Publications},
  address={Delhi},
  year={2012},
  isbn={978-93-81505-19-9}
}`
  },
  "pub-c1": {
    title: "Font Type Analysis for Online Reading Using Eye Tracking Technology",
    apa: "Tripathi, D., Singh, A., Raj, Y., & Yadav nee Ghosh, S. (Accepted). Font Type Analysis for Online Reading Using Eye Tracking Technology. Lecture Notes in Networks and Systems. Springer.",
    bibtex: `@inproceedings{tripathi2025fonttype,
  title={Font Type Analysis for Online Reading Using Eye Tracking Technology},
  author={Tripathi, Dhyanendra and Singh, Anurag and Raj, Yash and Yadav nee Ghosh, Sresha},
  booktitle={Lecture Notes in Networks and Systems},
  publisher={Springer},
  year={2025},
  note={Accepted, Scopus Indexed}
}`
  },
  "pub-c2": {
    title: "Higher-order Statistical Features-based Machine Learning Approach for Evaluating Advertisement Effectiveness",
    apa: "Karthik, C., Vedanarayana, T. S., Singh, A., & Yadav nee Ghosh, S. (Submitted). Higher-order Statistical Features-based Machine Learning Approach for Evaluating Advertisement Effectiveness through Eye-Tracking Data Analysis. Lecture Notes in Networks and Systems. Springer.",
    bibtex: `@inproceedings{karthik2025adml,
  title={Higher-order Statistical Features-based Machine Learning Approach for Evaluating Advertisement Effectiveness through Eye-Tracking Data Analysis},
  author={Karthik, Chokkakula and Vedanarayana, Tankala Sri and Singh, Anurag and Yadav nee Ghosh, Sresha},
  booktitle={Lecture Notes in Networks and Systems},
  publisher={Springer},
  year={2025},
  note={Submitted, Scopus Indexed}
}`
  },
  "pub-c3": {
    title: "The Portrayal of LGBTQ Community in Contemporary Hindi Cinemas",
    apa: "Kumar, A., Gupta, A., Yadav, N., & Yadav, S. (2021). The Portrayal of LGBTQ Community in Contemporary Hindi Cinemas. International Conference on Towards Gender Equality: Overpowering Structural Barriers and Reclaiming Agency, Jagran Lakecity University, Bhopal.",
    bibtex: `@inproceedings{kumar2021lgbtq,
  title={The Portrayal of LGBTQ Community in Contemporary Hindi Cinemas},
  author={Kumar, Aaditya and Gupta, Apoorva and Yadav, Nandita and Yadav, Sresha},
  booktitle={International Conference on Towards Gender Equality: Overpowering Structural Barriers and Reclaiming Agency},
  organization={Jagran Lakecity University},
  year={2021}
}`
  },
  "pub-c4": {
    title: "On the Place of Business: Conflict between India and Pakistan",
    apa: "Yadav, S., & Kumar, I. (2012). On the Place of Business: Conflict between India and Pakistan. 16th Annual Conference of Indian Political Economy Association (IPEA).",
    bibtex: `@inproceedings{yadav2012indiapakistan,
  title={On the Place of Business: Conflict between India and Pakistan},
  author={Yadav, Sresha and Kumar, Ishwar},
  booktitle={16th Annual Conference of Indian Political Economy Association (IPEA)},
  year={2012}
}`
  },
  "pub-c5": {
    title: "Sensitizing Child Poverty Impacts on Adult Outcomes in Developing Countries",
    apa: "Kumar, I., Kumar, D., Rahman, Z., Yadav, S., & Goyal, P. (2011). Sensitizing Child Poverty Impacts on Adult Outcomes in Developing Countries. International Conference on Interdisciplinary Research and Development (ICIRD), Bangkok, Thailand.",
    bibtex: `@inproceedings{kumar2011childpoverty,
  title={Sensitizing Child Poverty Impacts on Adult Outcomes in Developing Countries},
  author={Kumar, Ishwar and Kumar, D. and Rahman, Z. and Yadav, Sresha and Goyal, P.},
  booktitle={International Conference on Interdisciplinary Research and Development (ICIRD)},
  address={Bangkok, Thailand},
  year={2011}
}`
  },
  "pub-c6": {
    title: "Green Marketing Mix: Rethinking Competitive Advantage during Climate Change",
    apa: "Kumar, D., Kumar, I., Rahman, Z., Yadav, S., & Goyal, P. (2011). Green Marketing Mix: Rethinking Competitive Advantage during Climate Change. International Conference on Interdisciplinary Research and Development (ICIRD), Bangkok, Thailand.",
    bibtex: `@inproceedings{kumar2011greenmarketing,
  title={Green Marketing Mix: Rethinking Competitive Advantage during Climate Change},
  author={Kumar, D. and Kumar, Ishwar and Rahman, Z. and Yadav, Sresha and Goyal, P.},
  booktitle={International Conference on Interdisciplinary Research and Development (ICIRD)},
  address={Bangkok, Thailand},
  year={2011}
}`
  }
};

// --- DOM Elements ---
const themeToggle = document.getElementById('themeToggle');
const citationDialog = document.getElementById('citationDialog');
const citeDialogTitle = document.getElementById('citeDialogTitle');
const citationCodeBlock = document.getElementById('citationCodeBlock');
const closeDialogBtn = document.getElementById('closeDialogBtn');
const copyCiteBtn = document.getElementById('copyCiteBtn');
const tabBtns = document.querySelectorAll('.dialog-tabs .tab-btn');
const toast = document.getElementById('toast');
const heroBanner = document.getElementById('heroBanner');

let currentPubId = null;
let currentFormat = 'bibtex';

// --- Theme Logic ---
function initTheme() {
  const savedTheme = localStorage.getItem('minimal-theme') || 
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggle?.addEventListener('click', () => {
    const active = document.documentElement.getAttribute('data-theme');
    const target = active === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', target);
    localStorage.setItem('minimal-theme', target);
  });
}

// --- Citation Dialog Logic ---
function initCitations() {
  document.querySelectorAll('.cite-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pubId = e.currentTarget.getAttribute('data-id');
      const pub = citations[pubId];
      if (!pub) return;

      currentPubId = pubId;
      currentFormat = 'bibtex';
      citeDialogTitle.textContent = `Cite: ${pub.title}`;
      
      tabBtns.forEach(t => t.classList.toggle('active', t.getAttribute('data-format') === 'bibtex'));
      citationCodeBlock.textContent = pub.bibtex;

      citationDialog.showModal();
    });
  });

  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      tabBtns.forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentFormat = e.currentTarget.getAttribute('data-format');

      if (currentPubId && citations[currentPubId]) {
        citationCodeBlock.textContent = citations[currentPubId][currentFormat] || citations[currentPubId].bibtex;
      }
    });
  });

  copyCiteBtn?.addEventListener('click', () => {
    const text = citationCodeBlock.textContent;
    navigator.clipboard.writeText(text).then(() => {
      showToast('Citation copied to clipboard');
      citationDialog.close();
    });
  });

  closeDialogBtn?.addEventListener('click', () => {
    citationDialog.close();
  });

  citationDialog?.addEventListener('click', (e) => {
    const rect = citationDialog.getBoundingClientRect();
    const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
    if (!isInDialog) {
      citationDialog.close();
    }
  });

  // --- Single-Section Tabbed View Switching Logic ---
  const sections = document.querySelectorAll('.academic-section');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');

  function scrollToContentIfMobile() {
    if (window.innerWidth <= 860) {
      const contentMain = document.querySelector('.content-main');
      if (contentMain) {
        const navHeight = document.querySelector('.academic-navbar')?.offsetHeight || 60;
        const targetTop = contentMain.getBoundingClientRect().top + window.pageYOffset - navHeight - 12;
        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: 'smooth'
        });
      }
    }
  }

  function switchSection(targetId, userInitiated = false) {
    if (!targetId) targetId = 'about';

    // Hide all sections, show active section
    let found = false;
    sections.forEach(section => {
      const isMatch = section.getAttribute('id') === targetId;
      section.classList.toggle('active-section', isMatch);
      if (isMatch) found = true;
    });

    // Fallback to about if not found
    if (!found) {
      targetId = 'about';
      const aboutSec = document.getElementById('about');
      if (aboutSec) aboutSec.classList.add('active-section');
    }

    // Update active nav links (both desktop and mobile)
    desktopNavLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === targetId);
    });

    mobileNavLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === targetId);
    });

    // Close mobile drawer on selection
    closeMobileDrawer();

    // Trigger smooth cascading reveals for the activated section
    refreshActiveReveals();

    // On mobile, automatically and smoothly scroll down to content when user selects a menu option
    if (userInitiated) {
      setTimeout(() => {
        scrollToContentIfMobile();
      }, 50);
    }
  }

  // Mobile Drawer Toggle Handlers
  function toggleMobileDrawer() {
    const isOpen = mobileNavDrawer?.classList.contains('is-open');
    if (isOpen) {
      closeMobileDrawer();
    } else {
      openMobileDrawer();
    }
  }

  function openMobileDrawer() {
    mobileNavDrawer?.classList.add('is-open');
    mobileMenuToggle?.classList.add('is-active');
    mobileMenuToggle?.setAttribute('aria-expanded', 'true');
    mobileNavDrawer?.setAttribute('aria-hidden', 'false');
  }

  function closeMobileDrawer() {
    mobileNavDrawer?.classList.remove('is-open');
    mobileMenuToggle?.classList.remove('is-active');
    mobileMenuToggle?.setAttribute('aria-expanded', 'false');
    mobileNavDrawer?.setAttribute('aria-hidden', 'true');
  }

  // --- Left Contact Drawer Logic (Mobile) ---
  const mobileContactBtn = document.getElementById('mobileContactBtn');
  const mobileContactDrawerOverlay = document.getElementById('mobileContactDrawerOverlay');
  const mobileContactDrawerPanel = document.getElementById('mobileContactDrawerPanel');
  const closeContactDrawerBtn = document.getElementById('closeContactDrawerBtn');

  function openLeftContactDrawer() {
    mobileContactDrawerOverlay?.classList.add('is-open');
    mobileContactDrawerOverlay?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLeftContactDrawer() {
    mobileContactDrawerOverlay?.classList.remove('is-open');
    mobileContactDrawerOverlay?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  mobileContactBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    openLeftContactDrawer();
  });

  closeContactDrawerBtn?.addEventListener('click', () => {
    closeLeftContactDrawer();
  });

  mobileContactDrawerOverlay?.addEventListener('click', (e) => {
    if (mobileContactDrawerPanel && !mobileContactDrawerPanel.contains(e.target)) {
      closeLeftContactDrawer();
    }
  });

  // Close left contact drawer on esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLeftContactDrawer();
      closeMobileDrawer();
    }
  });

  // If clicking section link inside left contact drawer
  document.querySelectorAll('.drawer-section-link').forEach(link => {
    link.addEventListener('click', () => {
      closeLeftContactDrawer();
    });
  });

  mobileMenuToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMobileDrawer();
  });

  // Close drawer on click outside
  document.addEventListener('click', (e) => {
    if (mobileNavDrawer?.classList.contains('is-open')) {
      if (!mobileNavDrawer.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        closeMobileDrawer();
      }
    }
  });

  // Listen to all anchor clicks targeting sections (brand logo, desktop/mobile nav links + inline links)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement && targetElement.classList.contains('academic-section')) {
          e.preventDefault();
          history.pushState(null, '', href);
          switchSection(targetId, true);
        }
      }
    });
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '') || 'about';
    switchSection(hash);
  });

  // Initial section load
  const initialHash = window.location.hash.replace('#', '') || 'about';
  switchSection(initialHash);
}

// --- Minimal Toast ---
let toastTimer;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

// --- Modern Torch / Spotlight Hover Effect ---
function initTorchHover() {
  const spotlightTargets = document.querySelectorAll('.credentials-strip, .editorial-entry, .teaching-record, .biography-card');
  spotlightTargets.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--mouse-x', `-999px`);
      card.style.setProperty('--mouse-y', `-999px`);
    });
  });
}

// --- Expert Scroll Progress & Kinetic Back-to-Top Engine ---
function initScrollProgressAndBackToTop() {
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const progressRingCircle = document.getElementById('progressRingCircle');
  const circumference = 113.1; // 2 * PI * 18

  let ticking = false;

  function updateScrollMetrics() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = scrollHeight > 0 ? Math.min(1, Math.max(0, scrollTop / scrollHeight)) : 0;

    // 1. Update Header Hairline Progress Bar
    if (scrollProgressBar) {
      scrollProgressBar.style.transform = `scaleX(${scrollPercent})`;
    }

    // 2. Update Back to Top Floating Ring & Visibility
    if (backToTopBtn && progressRingCircle) {
      const offset = circumference - (scrollPercent * circumference);
      progressRingCircle.style.strokeDashoffset = offset;
      backToTopBtn.classList.toggle('is-visible', scrollTop > 280);
    }

    // 3. Cinematic Desktop Parallax on Hero Banner
    const bannerImage = document.querySelector('.banner-image');
    if (bannerImage && window.innerWidth > 860 && scrollTop < 450) {
      bannerImage.style.transform = `translateY(${scrollTop * 0.18}px) scale(${1 + scrollTop * 0.00015})`;
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollMetrics);
      ticking = true;
    }
  }, { passive: true });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// --- Smooth Intersection Scroll Reveal Engine ---
let revealObserver = null;
function initScrollRevealObserver() {
  const revealTargets = document.querySelectorAll(
    '.editorial-entry, .teaching-record, .scholarly-entry, .credentials-strip, .biography-card, .contact-content-block, .lead-about-grid'
  );

  if ('IntersectionObserver' in window) {
    if (revealObserver) revealObserver.disconnect();

    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    revealTargets.forEach(el => {
      el.classList.add('scroll-reveal');
      revealObserver.observe(el);
    });
  } else {
    revealTargets.forEach(el => el.classList.add('is-revealed'));
  }
}

// Retrigger reveals when switching tabs
function refreshActiveReveals() {
  setTimeout(() => {
    const activeSection = document.querySelector('.academic-section.active-section');
    if (activeSection) {
      const targets = activeSection.querySelectorAll('.editorial-entry, .teaching-record, .scholarly-entry, .credentials-strip, .biography-card, .contact-content-block, .lead-about-grid');
      targets.forEach((el, index) => {
        el.classList.add('scroll-reveal');
        setTimeout(() => {
          el.classList.add('is-revealed');
        }, index * 60);
      });
    }
  }, 60);
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCitations();
  initTorchHover();
  initScrollProgressAndBackToTop();
  initScrollRevealObserver();
});
