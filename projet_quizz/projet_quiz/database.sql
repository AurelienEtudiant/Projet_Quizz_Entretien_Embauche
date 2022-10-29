--
-- Base de données
--

-- --------------------------------------------------------

--
-- Structure de la table categories
--

CREATE TABLE categories (
  id_categorie serial PRIMARY KEY NOT NULL,
  label_fr varchar(300) NOT NULL,
  label_en varchar(300) NOT NULL
);

--
-- Table categories
--

INSERT INTO categories (id_categorie, label_fr, label_en) VALUES
(1, 'Développeur Web front-end', 'Web Developper front-end'),
(2, 'Développeur Web back-end', 'Web Developper back-end'),
(3, 'Développeur Angular', 'Angular Developper'),
(4, 'Git', 'Git'),
(5, 'Réseaux', 'Networks'),
(6, 'Programmation orientée objet', 'Object-Oriented Programming' );

-- --------------------------------------------------------

--
-- Structure de la table difficultes
--

CREATE TABLE difficultes (
  id_difficulte serial PRIMARY KEY NOT NULL,
  level_fr varchar(300) NOT NULL,
  level_en varchar(300) NOT NULL
);

--
-- Table difficultes
--

INSERT INTO difficultes (id_difficulte, level_fr, level_en) VALUES
(1, 'Facile', 'Easy'),
(2, 'Moyen', 'Medium'),
(3, 'Difficile', 'Hard');

-- --------------------------------------------------------

--
-- Structure de la table questions
--

CREATE TABLE questions (
  id_question serial PRIMARY KEY NOT NULL,
  label_fr varchar(300) NOT NULL,
  label_en varchar(300) NOT NULL,
  id_categorie int REFERENCES categories(id_categorie) NOT NULL,
  id_difficulte int REFERENCES difficultes(id_difficulte) NOT NULL,
  eval_mode boolean NOT NULL,
  training_mode boolean NOT NULL,
  survival_mode boolean NOT NULL,
  pro_tips_fr varchar(300),
  pro_tips_en varchar(300)
);

--
-- Table questions
--

INSERT INTO questions (id_question, label_fr, label_en, id_categorie, id_difficulte, eval_mode, training_mode, survival_mode, pro_tips_fr, pro_tips_en) VALUES
(1, 'Expliquez en quelques mots ce qu’est le modèle MVC :', 'Briefly explain what the MVC pattern is:', 1, 2, TRUE, TRUE, FALSE, NULL, NULL),
(2, 'Expliquez en quelques mots ce qu’est le design responsive :', 'Briefly explain what responsive design is:', 1, 3, TRUE, TRUE, FALSE, NULL, NULL),
(3, 'Expliquez en quelques mots ce qu’est la Méthode Kanban : ', 'Explain in a few words what the Kanban Method is:', 1, 2, TRUE, TRUE, FALSE, NULL, NULL),
(4, 'Donnez la définition d’une Api / interface de programmation :', 'Give the definition of an API / programming interface:', 1, 1, TRUE, TRUE, FALSE, NULL, NULL),
(5, 'Comment améliorer une page web qui se charge lentement ?(Donnez deux idées)', 'How to improve a web page that loads slowly? (Give two ideas)', 1, 2, TRUE, TRUE, FALSE, NULL, NULL),
(6, 'Que signifie DOCTYPE ?', 'What does DOCTYPE mean?', 1, 2, TRUE, TRUE, FALSE, NULL, NULL),
(7, 'Qu’est ce que l’html sémantique ?', 'What is Semantic HTML?', 1, 3, TRUE, TRUE, FALSE, NULL, NULL),
(8, 'Quelle est la différence syntaxique entre une liste à puces et une liste numérotée ? ', 'What is the syntactical difference between a bulleted list and a numbered list?', 1, 2, TRUE, TRUE, FALSE, NULL, NULL),
(9, 'Quelle est la différence entre un "attribut" et un "bien" ? ', 'What is the difference between an "attribute" and a "good"?', 1, 3, TRUE, TRUE, FALSE, NULL, NULL),
(10, 'Que signifie l’acronyme HTML ?', 'What does the acronym HTML stand for?', 1, 1, TRUE, TRUE, FALSE, NULL, NULL),
(11, 'Que signifie l’acronyme CSS', 'What does the acronym CSS stand for?', 1, 1, TRUE, TRUE, FALSE, NULL, NULL),
(12, 'Qu’est ce qu’une balise HTML ?', 'What is an HTML tag?', 1, 2, TRUE, TRUE, FALSE, NULL, NULL),
(13, 'Est-ce que tous les navigateurs supportent HTML5 à 100 %?', 'Do all browsers support HTML5 100%?', 1, 1, TRUE, TRUE, FALSE, NULL, NULL),
(14, 'Quelle est la différence entre « == » et « === » ?', 'What is the difference between "==" and "==="?', 1, 2, TRUE, TRUE, FALSE, NULL, NULL),
(15, 'Comment lier js sur une page HTML ?', 'How to bind js on HTML page?', 1, 3, TRUE, TRUE, FALSE, NULL, NULL),
(16, 'Qu’est ce que SetTimeout() ?', 'What is SetTimeout()?', 1, 2, TRUE, TRUE, FALSE, NULL, NULL),
(17, 'Peux-t-on mettre des vidéos via HTML5 ?', 'Can videos be uploaded via HTML5?', 1, 1, TRUE, TRUE, FALSE, NULL, NULL),
(18, 'Qu’est ce qu’un cache d’application ?', 'What is an application cache?', 1, 3, TRUE, TRUE, FALSE, NULL, NULL),
(19, 'A quoi sert une carte d’image ?', 'What is an image card used for?', 1, 2, TRUE, TRUE, FALSE, NULL, NULL),
(20, 'Qu’est ce qu’une fonction anonyme?', 'What is an anonymous function?', 1, 2, TRUE, TRUE, FALSE, NULL, NULL),
(21, 'Pouvez-vous citer quelques cas où les balises logiques et physiques sont utiles?', 'Can you name a few cases where logical and physical tags are useful?', 1, 3, TRUE, TRUE, FALSE, NULL, NULL),
(22, 'Quelle est la différence entre les éléments bloc et en ligne ?', 'What is the difference between block and inline elements?', 1, 2, TRUE, TRUE, FALSE, NULL, NULL),
(23, 'Qu’est ce que javascript(js) ?', 'What is javascript(js)?', 1, 1, TRUE, TRUE, FALSE, NULL, NULL),
(24, 'Comment créer un objet en js ?', 'How to create an object in js?', 1, 2, TRUE, TRUE, FALSE, NULL, NULL),
(25, 'Comment lire les propriétés d’un objet en js ?', 'How to read object properties in js?', 1, 2, TRUE, TRUE, FALSE, NULL, NULL),
(26, 'Qu’est ce que l’héritage prototype ?', 'What is prototype inheritance? ', 1, 3, TRUE, TRUE, FALSE, NULL, NULL),
(27,'Avec angular comment gérer les cookies ? (c’est à dire comment allez-vous les définir, les effacer ainsi que les obtenir)', 'With angular how to manage cookies? (i.e. how are you going to set them, clear them as well as get them)', 1, 2, TRUE, TRUE, FALSE, NULL, NULL),
(28,'Quelle est la différence entre Angular2 et AngularJS ?', 'What is the difference between Angular2 and AngularJS?', 1, 3, TRUE, TRUE, FALSE, NULL, NULL),
(29,'Est-il possible d’implémenter une SPA (Single Page Application) dans Angular ?', 'Is it possible to implement a SPA (Single Page Application) in Angular?', 1, 1, TRUE, TRUE, FALSE, NULL, NULL),
(30,'Pouvez-vous me donner les différences entre les expressions de javascript et celles d’angular ?', 'Can you give me the differences between javascript and angular expressions?', 1, 2, TRUE, TRUE, FALSE, NULL, NULL),
(31, 'Que signifie l’acronyme html ?', 'What does the acronym html stand for?', 1, 1, TRUE, TRUE, TRUE, NULL, NULL),
(32, 'Que signifie l’acronyme css ?', 'What does the acronym css stand for?', 1, 1, TRUE, TRUE, TRUE, NULL, NULL),
(33, 'Comment créer un projet angular ?', 'How to create an angular project?', 3, 2, TRUE, TRUE, TRUE, NULL, NULL),
(34, 'Comment créer un serveur sur angular ?', 'How to create a server on angular?', 3, 2, TRUE, TRUE, TRUE, NULL, NULL),
(35, 'Citez un protocole réseaux :', 'List one network protocol:', 5, 3, TRUE, TRUE, TRUE, NULL, NULL),
(36, 'Comment créer un component en angular ? ', 'How to create a component in angular?', 3, 2, TRUE, TRUE, TRUE, NULL, NULL),
(37, 'Quelle est la balise pour créer un titre sur un site web ?', 'What is the tag for creating a title on a website?', 1, 2, TRUE, TRUE, TRUE, NULL, NULL),
(38, 'Peux-t-on mettre des vidéos en HTML5 ?', 'Can we put videos in HTML5?', 1, 1, TRUE, TRUE, FALSE, NULL, NULL),
(39, 'Quelle est la balise qui indique un pied de page?', 'What is the tag that indicates a footer?', 1, 3, TRUE, TRUE, TRUE, NULL, NULL),
(40, 'Quel langage de programmation permet de faire du front-end ?', 'What programming language ​​allow front-end?',1, 2, TRUE, TRUE, TRUE, NULL, NULL),
(41, 'Quel langage de programmation permet de faire du back-end ?', 'What programming language ​​do the backend?',2, 2, TRUE, TRUE, TRUE, NULL, NULL),
(42, 'Est-il possible de faire de la POO en java ? ', 'Is it possible to do OOP in java?', 6, 1, TRUE, TRUE, FALSE, NULL, NULL),
(43, 'Est-il possible de faire de la POO en php ?', 'Is it possible to do OOP in php?', 6, 1, TRUE, TRUE, FALSE, NULL, NULL),
(44, 'Que signifie ip ?', 'What does ip mean?', 5, 3, TRUE, TRUE, TRUE, NULL, NULL),
(45, 'Que signifie DNS ?', 'What does DNS mean?', 5, 2, TRUE, TRUE, TRUE, NULL, NULL),
(46, 'Y a t’il une différence entre « == » et « === » ?(javascript)', 'Is there a difference between "==" and "==="?(javascript)', 1, 1, TRUE, TRUE, FALSE, NULL, NULL),
(47, 'Quelle est la balise pour faire un contenu introductif d’un site?', 'What is the tag to make an introductory content of a site?', 1, 3, TRUE, TRUE, TRUE, NULL, NULL),
(48, 'Le débit de la fibre est-il plus important que celui de l’adsl?', 'Is the speed of fiber higher than that of ADSL?', 5, 1, TRUE, TRUE, FALSE, NULL, NULL),
(49, 'Que signifie AOT?(angular)', 'What does AOT mean? (angular)', 3, 2, TRUE, TRUE, TRUE, NULL, NULL),
(50, 'Que signifie JIT?(angular)', 'What does JIT mean? (angular)', 3, 2, TRUE, TRUE, TRUE, NULL, NULL),
(51, 'Quelle est la commande qui permet de changer de branche sur Git?', 'What is the command to switch branches on Git?', 4, 2, TRUE, TRUE, TRUE, NULL, NULL),
(52, 'Quelle est la commande pour faire un commit propre avec Git?', 'What is the command to do a clean commit with Git?', 4, 1, TRUE, TRUE, TRUE, NULL, NULL),
(53, 'Quelle est la différence entre Git et Github?', 'What is the difference between Git and Github?', 4, 3, TRUE, TRUE, FALSE, NULL, NULL),
(54, 'Git est-il un vcs?(Un logiciel de gestion de versions)', 'Is Git a vcs? (A version control software)', 4, 1, TRUE, TRUE, FALSE, NULL, NULL),
(55, 'Peux-t-on utiliser Git sur le terminal vscode?', 'Can we use Git on the vscode terminal?', 4, 1, TRUE, TRUE, FALSE, NULL, NULL),
(56, 'PostgreSQL fonctionne-t-il sur windows?', 'Does PostgreSQL work on windows?', 3, 1, TRUE, TRUE,FALSE, NULL, NULL),
(57, 'Quelle est la requête SQL pour faire un inner join?', 'What is the SQL query to do an inner join?', 3, 3, TRUE, TRUE, TRUE, NULL, NULL),
(58, 'Peux-t-on lier un projet angular à une base de donnée?', 'What is the query to create a table in sql?', 3, 1, TRUE, TRUE, FALSE, NULL, NULL),
(59, 'Quelle est la requête pour créer une table en sql?', 'What is the query to create a table in sql?', 3, 3, TRUE, TRUE, TRUE, NULL, NULL),
(60, 'Comment définir une clé primaire dans une table sql?', 'How to set primary key in sql table?', 3, 2, TRUE, TRUE, TRUE, NULL, NULL),
(61, 'Que signifie HTTP?', 'What does mean HTTP', 5, 2, TRUE, TRUE, FALSE, NULL, NULL ),
(62, 'En POO en java comment créer une classe?', 'In OOP in java how to create a class?', 6, 2, TRUE, TRUE, TRUE, NULL, NULL),
(63, 'En Java quel est le mot qui sert à faire de la hiérarchie de classe?', 'In Java what is the word used to make class hierarchy?', 6, 2, TRUE, TRUE, TRUE, NULL, NULL),
(64, 'Quel est le mot à utiliser dans un constructeur pour faire appel à un super constructeur ? (Java)', 'What is the word to use in a constructor to call a super constructor? (Java)', 6, 2, TRUE, TRUE, TRUE, NULL, NULL),
(65, 'Que signifie Php?', 'What does Php mean?', 3, 3, TRUE, TRUE, FALSE, NULL, NULL),
(66, 'Quel est l’ancien nom de php?', 'What is the old name of php?', 3, 3, TRUE, TRUE, TRUE, NULL, NULL),
(67, 'Quel framework est un frameworks css?', 'What framework is css framework?', 1, 3, TRUE, TRUE, TRUE, NULL, NULL),
(68, 'Quelle est la requête css pour changer la couleur de fond d’une page html?', 'What is the css query to change the background color of an html page?', 1, 2, TRUE, TRUE, TRUE, NULL, NULL),
(69, 'Quelle est la balise pour mettre une image html?', 'What is the tag to put an html image?', 1, 2, TRUE, TRUE, TRUE, NULL, NULL),
(70, 'Par quoi est désigné un protocole de réseau locale?', 'What is a LAN protocol called?', 5, 3, TRUE, TRUE, TRUE, NULL, NULL),
(71, 'Qu’est ce qu’une API ?', 'What is an API?', 2, 2, TRUE, TRUE, FALSE, NULL, NULL),
(72, 'Quels logiciels pouvez-vous utiliser pour faire votre BD ?(citez en 3)', 'What software can you use to make your database?(list 3)', 2, 1, TRUE, TRUE, FALSE, NULL, NULL),
(73, 'Expliquez brièvement les missions d’un développeur back-end :', 'Briefly explain the duties of a back-end developer:', 2, 2, TRUE, TRUE, FALSE, NULL, NULL),
(74, 'Quelle est la différence entre un développeur back et front end ?', 'What is the difference between a back and front end developer?', 2, 3, TRUE, TRUE, FALSE, NULL, NULL),
(75, 'Que sont les directives dans Angular ?', 'What are directives in Angular?', 3, 3, TRUE, TRUE, FALSE, NULL, NULL),
(76, 'Comment fonctionne l’injection de dépendance dans Angular ?', 'How does dependency injection work in Angular?', 3, 3, TRUE, TRUE, FALSE, NULL, NULL),
(77, 'Quelle est la différence entre les expressions angulaires et les expressions Javascript ?', 'What is the difference between Angular expressions and JavaScript expressions?', 3, 2, TRUE, TRUE, FALSE, NULL, NULL),
(78, 'Décrire la liaison de données dans Angular ?', 'Describe data binding in Angular?', 3, 2, TRUE, TRUE, FALSE, NULL, NULL),
(79, 'Qu’est-ce que l’AOT et le JIT, et quelle est la différence ?', 'What are AOT and JIT, and what is the difference?', 3, 2, TRUE, TRUE, FALSE, NULL, NULL),
(80, 'Qu’est-ce que Rxjs (Extensions réactives pour Javascript) ?', 'What is Rxjs (Reactive Extensions for Javascript)?', 3, 1, TRUE, TRUE, FALSE, NULL, NULL),
(81, 'Comment les composants interagissent les uns avec les autres dans Angular ?', 'How do components interact with each other in Angular?', 3, 2, TRUE, TRUE, FALSE, NULL, NULL),
(82, 'Que sont les tuyaux angulaires ?', 'What are angular pipes?', 3, 3, TRUE, TRUE, FALSE, NULL, NULL),
(83, 'Avec quel navigateur AngularJS n’est-il pas compatible ?', 'Which browser is AngularJS not compatible with?', 3, 1, TRUE, TRUE, FALSE, NULL, NULL),
(84, 'Donnez la définition du boostraping:', 'Define bootstrapping:', 3, 2, TRUE, TRUE, FALSE, NULL, NULL),
(85, 'Quelle est la différence entre un développeur back et front end ?', 'What is the difference between a back and front end developer?', 1,  3, TRUE, TRUE, FALSE, NULL, NULL),
(86, 'Qu’est-ce que Git?', 'What is Git?', 4, 2, TRUE, TRUE, FALSE, NULL, NULL),
(87, 'Qu’est-ce qu’un système de contrôle de version distribuée?', 'What is a Distributed Version Control System?', 4, 2, TRUE, TRUE, FALSE, NULL, NULL),
(88, 'Qui a créé Git?', 'Who created Git?', 4, 3, TRUE, TRUE, FALSE, NULL, NULL),
(89, 'Quel langage est utilisée dans Git?', 'What language is used in Git?', 4, 1, TRUE, TRUE, FALSE, NULL, NULL),
(90, 'Qu’est-ce qu’un répertoire .git?', 'What is a .git directory?', 4, 2, TRUE, TRUE, FALSE, NULL, NULL),
(91, 'Que savez-vous du système d’exploitation?', 'What do you know about the operating system?', 5, 1, TRUE, TRUE, FALSE, NULL, NULL),
(92, 'Connaissez-vous DHCP et ses utilisations?', 'Do you know DHCP and its uses?', 5, 2, TRUE, TRUE, FALSE, NULL, NULL),
(93, 'Qu’est-ce que le clustering? Quels sont ses avantages?', 'What is Clustering? what are the advantages?', 5, 3, TRUE, TRUE, FALSE, NULL, NULL),
(94, 'Que savez-vous du câble Ethernet et du câble croisé?', 'What do you know about ethernet cable and crossover cable??', 5, 3, TRUE, TRUE, FALSE, NULL, NULL),
(95, 'Qu’entendez-vous par le terme Réservation?', 'What do you mean by the term Reservation?', 5, 2, TRUE, TRUE, FALSE, NULL, NULL),
(96, 'Expliquez brièvement ce que vous entendez par programmation orientée objet en Java?', 'Briefly explain what you mean by object oriented programming in Java?', 6, 1, TRUE, TRUE, FALSE, NULL, NULL),
(97, 'Décrivez la classe et l’objet en Java:', 'Describe class and object in Java:', 6, 2, TRUE, TRUE, FALSE, NULL, NULL),
(98, 'Donnez des exemples en temps réel et expliquez l’héritage:', 'Give real-time examples and explain inheritance:', 6, 2, TRUE, TRUE, FALSE, NULL, NULL),
(99, 'Combien de types d’héritage sont présents?(citez en 3)', 'How many types of inheritance are there? (list 3)', 6, 3, TRUE, TRUE, FALSE, NULL, NULL),
(100, 'Qu’est-ce que l’interface?', 'What is the interface?', 6, 2, TRUE, TRUE, FALSE, NULL, NULL);


-- --------------------------------------------------------

--
-- Structure de la table reponses
--

CREATE TABLE reponses (
  id_reponse serial PRIMARY KEY NOT NULL,
  id_question int REFERENCES questions(id_question) NOT NULL,
  label_fr varchar(300) NOT NULL,
  label_en varchar(300) NOT NULL,
  valid boolean NOT NULL
);

--
-- Table reponses
--

INSERT INTO reponses (id_reponse, id_question, label_fr, label_en, valid) VALUES
(1, 1, 'Modèle-vue-contrôleur ou MVC est un motif d’architecture logicielle destiné aux interfaces graphiques', 'Model-View-Controller or MVC is a software architecture pattern for graphical user interfaces',  TRUE),
(2, 2, 'Le Responsive Design ou plus précisément le Responsive Web Design (RWD) est une technique de conception d’interface digitale qui fait en sorte que l’affichage d’une quelconque page d’un site s’adapte de façon automatique à la taille de l’écran du terminal qui le lit.', 'Responsive Design or more precisely Responsive Web Design (RWD) is a digital interface design technique that ensures that the display of any page of a site automatically adapts to the size of the user. screen of the terminal that reads it.',  TRUE),
(3, 3, 'Kanban est un framework populaire pour implémenter le développement logiciel Agile et DevOps. Il repose sur un travail effectué en toute transparence et une communication en temps réel de la capacité. Les tâches sont représentées visuellement sur un tableau Kanban.', 'Kanban is a popular framework for implementing Agile and DevOps software development. It is based on transparent work and real-time communication of capacity. Tasks are represented visually on a Kanban board.',  TRUE),
(4, 4, 'Une API (application programming interface ou « interface de programmation d’application ») est une interface logicielle qui permet de « connecter » un logiciel ou un service à un autre logiciel ou service afin d’échanger des données et des fonctionnalités. ', 'An API (application programming interface or “application programming interface”) is a software interface that allows software or a service to be “connected” to another software or service in order to exchange data and functionalities.',  TRUE),
(5, 5, 'Diminuer le poids des vidéos, compresser les images pour accélérer le chargement, supprimer l’inutile pour baisser le volume de requêtes HTTP, Hiérarchiser les chargements avec le lazy loading, minifier le code pour améliorer la vitesse de chargement du site web', 'Reduce the weight of videos, compress images to speed up loading, remove the unnecessary to reduce the volume of HTTP requests, Prioritize loading with lazy loading, minify the code to improve the loading speed of the website',  TRUE),
(6, 6, 'La balise <!DOCTYPE>, placée au tout début de votre document HTML, permet de mentionner la version du langage HTML utilisée.Les informations de définition peuvent se trouver dans un fichier séparé, d’extension .dtd, dont l’URL sera alors indiquée. ', 'The <!DOCTYPE> tag, placed at the very beginning of your HTML document, allows you to mention the version of the HTML language used. The definition information can be found in a separate file, extension .dtd, whose URL will then be indicated.',  TRUE),
(7, 7, 'L’HTML sémantique est l’utilisation du balisage HTML visant à renforcer le sémantisme des informations contenues dans les pages web, c’est-à-dire leur sens, plutôt que de se borner à définir leurs présentations. ', 'Semantic HTML is the use of HTML markup to reinforce the semantics of the information contained in web pages, i.e. their meaning, rather than merely defining their presentations.',  TRUE),
(8, 8, 'Les bases. Les listes numérotées fonctionnent de la même manière qu’une liste à puces, à la différence qu’il faut remplacer la balise <ul> par <ol>. Tout comme pour les listes à puces, nous pouvons jouer avec la propriété CSS list-style-type. ', 'The basics. Numbered lists work the same way as a bulleted list, except that you have to replace the <ul> tag with <ol>. Just like with bulleted lists, we can play with the CSS list-style-type property.',  TRUE),
(9, 9, 'En termes généraux , les termes signifient la même chose.Les termes sont confondus car la représentation HTML d’un élément DOM comporte des attributs, mais lorsqu’ils sont représentés en tant qu’objet JavaScript, ces attributs apparaissent en tant que propriétés d’objet .', 'In general  terms, the terms mean the same thing.The terms are confused because the HTML representation of a DOM element has attributes , but when represented as a JavaScript object, these attributes appear as object properties.',  TRUE),
(10, 10, 'HyperTexte Markup Language', 'HyperTexte Markup Language',  TRUE),
(11, 11, 'Cascading Style Sheets', 'Cascading Style Sheets',  TRUE),
(12, 12, 'Les balises HTML correspondent à des éléments du code HTML d’une page web sur Internet. Elles sont une partie intégrante de la composition de la page puisqu’elles permettent de mettre en forme et de structurer les contenus. ', 'HTML tags correspond to elements of the HTML code of a web page on the Internet. They are an integral part of the composition of the page since they make it possible to format and structure the content.',  TRUE),
(13, 13, 'Oui', 'Yes',  TRUE),
(14, 14, 'Les deux « == » représente l’égalité faible, elle effectuera une conversion des deux éléments à comparer avant d’effectuer la comparaison. Tandis que l’égalité stricte ( === ) effectuera la même comparaison mais sans conversion préalable.', 'Both "==" represents the weak equality, it will perform a conversion of the two items to be compared before performing the comparison. While strict equality ( === ) will perform the same comparison but without prior conversion.',  TRUE),
(15, 15, 'Pour intégrer du Javascript dans une page HTML on peut recourir à deux méthodes différentes: Intégrer le code Javascript directement dans les tags de script ou déclarer le code Javascript dans un fichier JS et appeler celui avec l’attribut src. ', 'To integrate JavaScript into an HTML page, you can use two different methods: Integrate the JavaScript code directly into the script tags or declare the JavaScript code in a JS file and call the one with the src attribute.',  TRUE),
(16, 16, 'La méthode globale setTimeout() permet de définir un minuteur qui exécute une fonction ou un code donné après la fin du délai indiqué. ', 'The global setTimeout() method is used to set a timer that executes a given function or code after the specified time has elapsed.',  TRUE),
(17, 17, 'Oui', 'Yes',  TRUE),
(18, 18, 'Le cache agit comme une couche d’accès adjacente aux données pour votre base de données que vos applications peuvent utiliser pour accroître leurs performances. Une couche de cache de base de données peut être appliquée devant tout type de base de données. ', 'The cache acts as a data-adjacent access layer for your database that your applications can use to increase their performance. A database cache layer can be applied in front of any type of database.',  TRUE),
(19, 19, 'Ca permet à l’utilisateur de cliquer à l’intérieur d’une image afin d’avoir une réponse de la page en rapport avec l’objet désigné dans l’image, on utilise une carte d’image. ', 'It allows the user to click inside an image in order to have a response from the page related to the object designated in the image, we use an image map.',  TRUE),
(20, 20, 'C’est est une fonction définie, et éventuellement d’appel, sans être lié à un identificateur. Les fonctions anonymes sont utiles pour passer comme un argument fonction d’ordre supérieur. ', 'It is a defined function, and possibly a call, without being linked to an identifier. Anonymous functions are useful for passing as a higher-order function argument.',  TRUE),
(21, 21, 'b_l:Pour écrire du code sur notre site Web, souligner un texte,pour afficher l’abréviation sur la page Web.B_p:Ils sont habitués à mettre en évidence les phrases importantes,les styles de texte physique indiquent le type d’apparence spécifique d’une section.'  , 'l_b:To write code on our website, underline text,to display the abbreviation on the web page.p_b:They are used to highlight important phrases, physical text styles indicate the specific type of appearance of a section.',  TRUE),
(22, 22, 'Les éléments de type "block" sont généralement ceux que l’on utilise pour la mise en page, alors que les éléments "inline" sont surtout utilisés pour attribuer un style à une portion de texte. ', 'The "block" type elements are generally those used for layout, while the "inline" elements are mainly used to assign a style to a portion of text.',  TRUE),
(23, 23, 'JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives et à ce titre est une partie essentielle des applications web. Avec les langages HTML et CSS, JavaScript est un langage important pour les développeurs web.', 'JavaScript is a scripting language primarily used in interactive web pages and as such is an essential part of web applications. Along with HTML and CSS, JavaScript is an important language for web developers.',  TRUE),
(24, 24, 'let ‘nomDelObjet’ = new Object();', 'let ‘nameOfObject’ = newObject();',  TRUE),
(26,26, 'En ce qui concerne l’héritage, JavaScript n’utilise qu’une seule structure : les objets. Chaque objet possède une propriété privée qui contient un lien vers un autre objet appelé le prototype.', 'When it comes to inheritance, JavaScript uses only one structure: objects. Each object has a private property that contains a link to another object called the prototype.', TRUE),
(25, 25, 'Il est possible d’accéder à une propriété via son nom et via son indice (ordinal). Si on définit une propriété grâce à un nom, on accédera toujours à la valeur via le nom. ', 'It is possible to access a property via its name and via its index (ordinal). If you define a property using a name, you will always access the value using the name.',  TRUE),
(27, 27, 'Pour utiliser des cookies dans Angular, nous devons installer la bibliothèque de cookies Angular à l’aide du gestionnaire de packages npm suivant. Après avoir installé le gestionnaire de paquets, nous devons importer le service de cookie à l’intérieur de nos modules.', 'To use cookies in Angular, we need to install the Angular cookie library using the following npm package manager. After installing the package manager, we need to import the cookie service inside our modules.',  TRUE),
(28, 28, 'Cette différence est liée aux scripts utilisés dans ces frameworks. AngularJS utilise Javascript, alors que Angular 2 utilise Dactylographe pour créer ses applications. ', 'This difference is related to the scripts used in these frameworks. AngularJS uses Javascript, while Angular 2 uses Typist to build its applications. ',  TRUE),
(29, 29, 'Oui ', 'Yes',  TRUE),
(30, 30, 'JavaScript est un langage de script léger et orienté objet utilisé pour créer des pages HTML dynamiques.AngularJS est un framework de développement Web frontal open-source pour la création d’applications Web.', 'JavaScript is a lightweight, object-oriented scripting language used to create dynamic HTML pages. AngularJS is an open-source front-end web development framework for building web applications.', TRUE),
(31,31, 'HyperText Markup Language', 'HyperText Markup Language', TRUE),
(32,31, 'HyperText Markup Link', 'HyperText Markup Link', FALSE),
(33,31, 'HyperText Mark Language', 'HyperText Mark Language', FALSE),
(34,31, 'HyperText Mark Link', 'HyperText Mark Link', FALSE),
(35,32, 'Cascading Style Sheets', 'Cascading Style Sheets', TRUE),
(36,32, 'Cascading Sheets Style', 'Cascading Sheets Style', FALSE),
(37,32, 'Cascade Style Sheets', 'Cascade Style Sheets', FALSE),
(38,32, 'Cascade Sheets Style', 'Cascade Sheets Style', FALSE),
(39,33, 'ng new', 'ng new', TRUE),
(40,33, 'ng create ', 'ng create', FALSE),
(41,33, 'ng serve ', 'ng serve', FALSE),
(42,33, 'ng component', 'ng component', FALSE),
(43,34, 'ng new', 'ng new', FALSE),
(44,34, 'ng create ', 'ng create', FALSE),
(45,34, 'ng serve', 'ng serve', TRUE),
(46,34, 'ng component', 'ng component', FALSE),
(47,35, 'TCP', 'TCP', TRUE),
(48,35, 'ATP', 'ATP', TRUE),
(49,35, 'MVC', 'MVC', FALSE),
(50,35, 'SPX', 'SPX', TRUE),
(51,36, 'ng new ‘nomDuComponent’', 'ng new ‘nomDuComponent’', FALSE),
(52,36, 'ng serve ‘nomDuComponent’', 'ng serve ‘nomDuComponent’', FALSE),
(53,36, 'ng create ‘nomDuComponent’', 'ng create ‘nomDuComponent’', FALSE),
(54,36, 'ng generate component ‘nomDuComponent’', 'ng generate component ‘nomDuComponent’', TRUE),
(55,37, '<h2> </h2>', '<h2> </h2>', FALSE),
(56,37, '<h1> </h1>', '<h1> </h1>', FALSE),
(57,37, '<title> </title>', '<title> </title>', TRUE),
(58,37, '<p> </p>', '<p> </p>', FALSE),
(59,38, 'Oui', 'Yes', TRUE),
(60,38, 'Non', 'No', FALSE),
(61,39, '<h1> </h1>', '<h1> </h1>', FALSE),
(62,39, '<footer> </footer>', '<footer> </footer>', TRUE),
(63,39, '<header> </header>', '<header> </header>', FALSE),
(64,39, '<body> </body>', '<body> </body>', FALSE),
(65,40, 'Python', 'Python', FALSE),
(66,40, 'Java', 'Java', FALSE),
(67,40, 'HTML', 'HTML', TRUE),
(68,40, 'SQL', 'SQL', FALSE),
(69,41, 'Python', 'Python', TRUE),
(70,41, 'Javascript', 'Javascript', FALSE),
(71,41, 'HTML', 'HTML', FALSE),
(72,41, 'css', 'css', FALSE),
(73,42, 'Oui', 'Yes', TRUE),
(74,42, 'Non', 'No', FALSE),
(75,43, 'Oui', 'Yes', TRUE),
(76,43, 'Non', 'No', FALSE),
(77,44, 'Internet Protocol', 'Internet Protocol', TRUE),
(78,44, 'Internal Protocol', 'Internal Protocol', FALSE),
(79,44, 'Internet Proxy', 'Internet Proxy', FALSE),
(80,44, 'Internal Proxy', 'Internal Proxy', TRUE),
(81,45, 'Domain Name Subscribe', 'Domain Name Subscribe', FALSE),
(82,45, 'Domain Name System', 'Domain Name System', TRUE),
(83,45, 'Domain None Sytem', 'Domain None System', FALSE),
(84,45, 'Domain None Subscribe', 'Domain Nane Subscribe', FALSE),
(85,46, 'Oui', 'Yes', TRUE),
(86,46, 'Non', 'No', FALSE),
(87,47, '<footer> </footer>', '<footer> </footer>', FALSE),
(88,47, '<header> </header>', '<header> </header>', TRUE),
(89,47, '<h1> </h1>', '<h1> </h1>', FALSE),
(90,47, '<body> </body> ', '<body> </body> ', FALSE),
(91,48, 'Non', 'No', FALSE),
(92,48, 'Oui', 'No', TRUE),
(93,49, 'Ahead-Of-Time', 'Ahead-Of-Time', TRUE),
(94,49, 'Adjust-Of-Time', 'Adjust-Of-Time', FALSE),
(95,49, 'Ahead-On-Time', 'Ahead-On-Time', FALSE),
(96,49, 'Adjust-On-Time', 'Adjust-On-Time', FALSE),
(97,50, 'Java In TIme', 'Java In Time', FALSE),
(98,50, 'Just In Time', 'Just In Time', TRUE),
(99,50, 'Just Inner Time', 'Just Inner Time', FALSE),
(100,50, 'Java Inner Time', 'Java Inner Time', FALSE),
(101,51, 'git pull nomDeLaBranche', 'git pull branchName', FALSE),
(102,51, 'git branch nomDeLaBranche', 'git branch branchName', FALSE),
(103,51, 'git checkout nomDeLaBranche', 'git checkout branchName', TRUE),
(104,51, 'git commit nmDeLaBranche', 'git commit branchName', FALSE),
(105,52, 'git push "explication de ce qui a été ajouté"', 'git push "explanation of what has been added"', FALSE),
(106,52, 'git pull "explication de ce qui a été ajouté"', 'git pull "explanation of what has been added"', FALSE),
(107,52, 'git commit "explication de ce qui a été ajouté"', 'git commit "explanation of what has been added"', FALSE),
(108,52, 'git commit -m "explication de ce qui est ajouté"', 'git commit -m "explanation of what has been added"', FALSE),
(109,53, 'Git est un outil de gestion de version, Github est une plateforme qui permet d’héberger des dépôts Git.', 'Git is a version management tool, Github is a platform that allows you to host Git repositories.', TRUE),
(110,53, 'Github est un outil de gestion de version, Git est une plateforme qui permet d’héberger des dépôts Github.', 'Github is a version management tool, Git is a platform that allows you to host Github repositories.', FALSE),
(111,54, 'Non', 'No', FALSE),
(112,54, 'Oui', 'Yes', TRUE),
(113,55, 'Oui', 'Yes', TRUE),
(114,55, 'Non', 'No', FALSE),
(115,56, 'Non', 'No', FALSE),
(116,56, 'Oui', 'Yes', TRUE),
(117,57, 'INNER JOIN', 'INNER JOIN', TRUE),
(118,57, 'EQUIJOIN', 'EQUIJOIN', FALSE),
(119,57, 'SELECT', 'SELECT', FALSE),
(120,57, 'OUTERJOIN', 'OUTERJOIN', FALSE),
(121,58, 'Oui', 'Yes', TRUE),
(122,58, 'Non', 'No', FALSE),
(123,59, 'CREATE TABLE', 'CREATE TABLE', TRUE),
(124,59, 'NEW TABLE', 'NEW TABLE', FALSE),
(125,59, 'TABLE', 'TABLE', FALSE),
(126,59, 'TABLE CREATE', 'TABLE CREATE', FALSE),
(127,60, 'PRIMARY', 'PRIMARY', FALSE),
(128,60, 'KEY PRIMARY', 'KEY PRIMARY', FALSE),
(129,60, 'PRIMARY KEY', 'PRIMARY KEY', TRUE),
(130,60, 'KEY', 'KEY', FALSE),
(131,61, 'Hypermark Transfer Protocol', 'Hypermark Transfer Protocol', FALSE),
(132,61, 'Hypertext Transfer Protocol', 'Hypertext Transfer Protocol', TRUE),
(133,62, 'Public class ', 'Public class', TRUE),
(134,62, 'class', 'class', FALSE),
(135,62, 'private class ', 'private class', FALSE),
(136,62, 'interface', 'interface', FALSE),
(137,63, 'extends', 'extends', TRUE),
(138,63, 'implements', 'implements', FALSE),
(139,63, 'extend', 'extend', FALSE),
(140,63, 'implement', 'implement', FALSE),
(141,64, 'class', 'class', FALSE),
(142,64, 'construct', 'construct', FALSE),
(143,64, 'super', 'super', TRUE),
(144,64, 'protected', 'protected', FALSE),
(145,65, 'Hypertext Preprocessor', 'Hypertext Preprocessor', TRUE),
(146,65, 'Hypertext Processor', 'Hypertext Processor', FALSE),
(147,66, 'PHP/FA', 'PHP/FA', FALSE),
(148,66, 'PHP/FI', 'PHP/FI', TRUE),
(149,66, 'PHP/FB', 'PHP/FB', FALSE),
(150,66, 'PHP/FE', 'PHP/FE', FALSE),
(151,67, 'symphony', 'symphony', FALSE),
(152,67, 'pyramid', 'pyramid', FALSE),
(153,67, 'django', 'django', FALSE),
(154,67, 'Pure', 'Pure', TRUE),
(155,68, 'background', 'background', FALSE),
(156,68, 'back-color', 'back-color', FALSE),
(157,68, 'color', 'color', FALSE),
(158,68, 'background-color', 'background-color', TRUE),
(159,69, '< img src="URL source" >', '< img src="URL source" >', TRUE),
(160,69, '< img >', '< img >', FALSE),
(161,69, '< img src >', '< img src >', FALSE),
(162,69, '< img img >', '< img img >', FALSE),
(163,70, 'Fibre', 'Fibre', FALSE),
(164,70, 'Internet', 'Internet', FALSE),
(165,70, 'Wifi', 'Wifi', FALSE),
(166,70, 'Ethernet', 'Ethernet', TRUE),
(167,71, 'Une interface de programmation d’application est un ensemble normalisé de classes, de méthodes, de fonctions et de constantes qui sert de façade par laquelle un logiciel offre des services à d’autres logiciels.', 'Une interface de programmation d’application est un ensemble normalisé de classes, de méthodes, de fonctions et de constantes qui sert de façade par laquelle un logiciel offre des services à d’autres logiciels.', TRUE),
(168,72, 'Parmis les plus connus on a :MySQL, PostgreSQL, SAP HANA, Mongo DB, Microsoft SQL Server.', 'Among the best known are: MySQL, PostgreSQL, SAP HANA, Mongo DB, Microsoft SQL Server.', TRUE),
(169,73, 'Le développement back end peut englober la mise en place, la configuration et le maintien de plusieurs composantes essentielles d’un projet web.', 'Back end development can encompass setting up, configuring and maintaining several essential components of a web project.', TRUE),
(170,74, 'C’est grâce au front-end que l’utilisateur final va pouvoir interagir avec une fenêtre. C’est toutefois le back-end qui lui permettra de réaliser une action. Ils sont ainsi complémentaires.', 'It is thanks to the front-end that the end user will be able to interact with a window. However, it is the back-end that will allow him to perform an action. They are thus complementary.', TRUE),
(171,75, 'Directif est un concept très important dans Angular. Il est utilisé pour étendre le HTML et lui donner une nouvelle syntaxe. Les directives peuvent être prédéfinies ou personnalisées. Les directives peuvent être de composant d’attribut ou structurelle.', 'Directive is a very important concept in Angular. It is used to extend HTML and give it a new syntax. Directives can be predefined or customized. Directives can be attribute component or structural.', TRUE),
(172,76, 'L’injection de dépendance (DI) est un concept très important dans Angular2+. Avec l’injection de dépendances, les classes peuvent recevoir des dépendances d’autres classes ou services. ', 'Dependency injection (DI) is a very important concept in Angular2+. With dependency injection, classes can receive dependencies from other classes or services.', TRUE),
(173,77, 'Les expressions angulaires sont évaluées dans le contexte de la portée. Les expressions Javascript sont évaluées dans le contexte global. Dans les expressions angulaires, les virgules et le vide ne sont pas autorisés, nous ne devrions pas définir de fonctions.', 'Angular expressions are evaluated in scope context. JavaScript expressions are evaluated in the global context. In Angular expressions, commas and voids are not allowed we shouldn’t define functions.', TRUE),
(174,78, 'La liaison de données est un concept de communication entre le composant et l’objet DOM. Dans Angular, nous pouvons utiliser une liaison de données unidirectionnelle et une liaison de données bidirectionnelle.', 'Data binding is a concept of communication between the component and the DOM object. In Angular, we can use one-way data binding and two-way data binding.', TRUE),
(175,79, 'La compilation JIT a eu lieu pendant l’exécution du navigateur et la compilation AOT a lieu pendant le processus de génération. ', 'The JIT compilation took place during browser execution and the AOT compilation takes place during the build process.', TRUE),
(176,80, 'Rxjs est une bibliothèque, couramment utilisée avec le framework Angular. Il prend en charge la programmation réactive, qui est le paradigme de programmation asynchrone axé sur les flux de données et la propagation des changements.', 'Rxjs is a library, commonly used with the Angular framework. It supports reactive programming, which is the asynchronous programming paradigm focused on data flow and change propagation.', TRUE),
(177,81, 'La transmission de données entre les composants angulaires peut être effectuée de différentes manières, en fonction de la relation entre les composants.Dans le cas d’une relation parent-enfant, nous pouvons utiliser le décorateur @Input.', 'Passing data between Angular components can be done in different ways, depending on the relationship between the components. In the case of a parent-child relationship, we can use the @Input decorator.', TRUE),
(178,82, 'Les tuyaux dans Angular sont des classes avec décoration @Pipe, qui transforment l’entrée de données en sortie de données requise en fonction de la logique dans le tuyau. ', 'Pipes in Angular are classes with @Pipe decoration, which transform data input into required data output based on the logic in the pipe.', TRUE),
(179,83, 'La liaison de données est considérée comme l’une des fonctionnalités les plus influentes et essentielles qui peuvent établir une connexion entre les composants et le DOM.', 'Data binding is considered to be one of the most influential and essential features that can establish a connection between components and the DOM.', TRUE),
(180,84, 'Le bootstrapping est un moyen de démarrer ou d’initialiser l’application dans Angular, qu’il soit automatique ou manuel. ', 'Bootstrapping is a way to start or initialize the application in Angular, either automatic or manual.', TRUE),
(181,85, 'C’est grâce au front-end que l’utilisateur final va pouvoir interagir avec une fenêtre. C’est toutefois le back-end qui lui permettra de réaliser une action. Ils sont ainsi complémentaires', 'It is thanks to the front-end that the end user will be able to interact with a window. However, it is the back-end that will allow him to perform an action. They are thus complementary.', TRUE),
(182,86, 'Git est un outil de contrôle de version distribué. Il est compatible avec les flux de travail non linéaires distribués car il offre une assurance des données pour la création de logiciels de bonne qualité.', 'Git is a distributed version control tool. It is compatible with distributed nonlinear workflows as it provides data assurance for building good quality software.', TRUE),
(183,87, 'Un VCS distribué est un système qui ne dépend pas d’un serveur central pour conserver un fichier de projet et toutes ses versions. Dans le VCS distribué, chaque développeur obtient une copie locale du référentiel principal.', 'A distributed VCS is a system that does not depend on a central server to maintain a project file and all of its versions. In the distributed VCS, each developer gets a local copy of the main repository.', TRUE),
(184,88, 'Git a été créé par Linus Torvalds en 2005 sur la route du développement du noyau Linux.', 'Git was created by Linus Torvalds in 2005 on the road to Linux kernel development.', TRUE),
(185,89, 'C est le langage de programmation sous-jacent dans lequel Git est écrit. Le langage C rend Git rapide en évitant les surcoûts d’exécution liés à d’autres langages de programmation de haut niveau.', 'It is the underlying programming language in which Git is written. The C language makes Git fast by avoiding the runtime overhead associated with other high-level programming languages.', TRUE),
(186,90, 'Au moment où vous créez un référentiel, vous trouverez un répertoire .git présent à l’intérieur. Ce répertoire .git contient toutes les métadonnées du référentiel et maintient une trace de toutes les modifications apportées aux fichiers de votre référentiel.', 'The moment you create a repository, you will find a .git directory present inside it. This .git directory contains all repository metadata and keeps track of all changes to files in your repository', TRUE),
(187,91, 'Le système d’exploitation fonctionne comme un interprète entre une application et le matériel informatique et est utilisé comme une interface utilisateur.', 'The operating system works as an interpreter between an application and the computer hardware and is used as a user interface.', TRUE),
(188,92, 'Le protocole DHCP est utilisé pour allouer dynamiquement les adresses IP et d’autres paramètres de configuration réseau à un grand nombre d’ordinateurs sur un réseau afin de les aider à communiquer avec les autres réseaux IP.', 'Dynamic Host Configuration Protocol is used to dynamically allocate IP addresses and other network configuration parameters to a large number of computers on a network to help them communicate with other IP networks.', TRUE),
(189,93, 'Le clustering se produit lorsque deux ordinateurs ou plus fonctionnent ensemble comme un seul système et partagent leurs ressources.', 'Clustering occurs when two or more computers work together as a single system and share their resources.', TRUE),
(190,94, 'Le câble Ethernet et le câble croisé se ressemblent beaucoup et il est difficile de faire la différence entre eux. Ils sont conçus pour être utilisés dans le même port, ils ont donc le même nombre de broches et la même apparence.', 'Ethernet cable and crossover cable are very similar and it is difficult to tell the difference between them. They are designed to be used in the same port, so they have the same pin count and appearance.', TRUE),
(191,95, 'Certains systèmes informatiques ou équipements réseau nécessitent une adresse IP spécifique. Dans ces cas, les réservations sont effectuées dans le serveur DHCP, pour ce système particulier.', 'Some computer systems or network equipment require a specific IP address. In these cases, the reservations are made in the DHCP server, for that particular system.',  TRUE),
(192,96, 'La POO traite des objets, comme des entités réelles telles que stylo, mobile, compte bancaire qui a un état (données) et un comportement (méthodes).', 'OOP deals with objects, like real entities like pen, mobile, bank account which has state (data) and behavior (methods).', TRUE),
(193,97, 'La classe est un prototype ou un modèle dont l’état et le comportement sont pris en charge par un objet et utilisés dans la création d’objets.Ex: L’humain est une classe dont l’état a un système vertébral, un cerveau, une couleur et une taille, etc.', 'Class is a prototype or model whose state and behavior is supported by an object and used in the creation of objects.Ex: Human is a class whose state has vertebral system, brain, color and size, etc.',  TRUE),
(194,98, 'L’héritage signifie qu’une classe acquiert les propriétés d’une autre classe. Ex: Un vélo normal avec un vélo de sport(classe enfant), où le vélo de sport a hérité des propriétés et du comportement des roues d’un vélo normal.', 'Inheritance means that a class acquires the properties of another class. Ex: A normal bicycle with a sports bicycle (child class), where the sports bicycle has inherited the properties and behavior of wheels of a normal bicycle.',  TRUE),
(195,99, 'Différents types d’héritage sont répertoriés: unique, multiple, héritage à plusieurs niveaux, hiérarchique, hybride.', 'Different types of inheritance are listed: single, multiple, multi-level inheritance, hierarchical, hybrid', TRUE),
(196,100, 'L’interface est similaire à la classe où elle peut avoir des méthodes et des variables, mais ses méthodes n’ont pas de corps. L’interface est utilisée en Java pour l’abstraction et les héritages multiples.', 'Interface is similar to class where it can have methods and variables, but its methods don’t have a body. Interface is used in Java for abstraction and multiple inheritance.', TRUE);








-- --------------------------------------------------------

--
-- Structure de la table users
-- Useless pour jouer, mais utile pour une gestion de role (auth admin, add questions, ...)
--

CREATE TABLE users (
  idU serial PRIMARY KEY NOT NULL,
  idRole int NOT NULL,
  pseudo varchar(50) NOT NULL,
  password varchar(255) NOT NULL,
  hash varchar(255) NOT NULL
);
