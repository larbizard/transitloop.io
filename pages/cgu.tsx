import PageHeader from './components/PageHeader'
import PageFooter from './components/PageFooter'
import MobileFooter from './components/MobileFooter'
import * as Icon from 'react-feather'
import Head from 'next/head'


export default function TermsOfUse() {
  return (
    <div className="bg-yellow-400 h-full scroll-smooth">
      <Head>
        <title>Conditions générales d'utilisation</title>
      </Head>
      <PageHeader />
      <div>
        <div className="flex flex-row justify-center">
          <div className="p-8 lg:px-20">
            <h1 className="text-2xl font-bold"> 
                Termes et conditions générales
            </h1>
            <h2 className="text-xl font-bold py-4">
              Bienvenue sur MdinaMapper !
            </h2>
            <p className="py-2">
            Les présentes conditions générales décrivent les règles et règlements relatifs à l'utilisation du site web et de l'application de Mdina Mapper, situé à l'adresse <a href="https://www.mdinamapper.ma/" className="font-bold">https://www.mdinamapper.ma</a>.<br/>
            </p>
            <p>
            En accédant à ce site web, nous supposons que vous acceptez ces conditions générales. Ne continuez pas à utiliser MdinaMapper si vous n'acceptez pas de prendre toutes les conditions générales énoncées sur cette page.<br/>
            </p>
            <h3 className="text-xl font-bold py-4">Cookies :</h3>
            <p>
            Le site web utilise des cookies pour aider à personnaliser votre expérience en ligne. En accédant à MdinaMapper, vous avez accepté d'utiliser les cookies requis.<br/>

            Un cookie est un fichier texte qui est placé sur votre disque dur par un serveur de pages web. Les cookies ne peuvent pas être utilisés pour exécuter des programmes ou transmettre des virus à votre ordinateur. Les cookies vous sont attribués de manière unique et ne peuvent être lus que par un serveur web du domaine qui vous a émis le cookie.

            Nous pouvons utiliser des cookies pour collecter, stocker et suivre des informations à des fins statistiques ou marketing pour exploiter notre site web. Vous avez la possibilité d'accepter ou de refuser les Cookies facultatifs. Il existe certains Cookies obligatoires qui sont nécessaires au fonctionnement de notre site web. Ces cookies ne nécessitent pas votre consentement car ils fonctionnent toujours. N'oubliez pas qu'en acceptant les Cookies obligatoires, vous acceptez également les Cookies tiers, qui pourraient être utilisés via des services fournis par des tiers si vous utilisez ces services sur notre site web, par exemple, une fenêtre d'affichage vidéo fournie par des tiers et intégrée à notre site web.<br/>
            </p>

            <h3 className="text-xl font-bold py-4">Licence :</h3>
            <p className="py-2">
            Sauf indication contraire, Mdina Mapper et/ou ses concédants de licence détiennent les droits de propriété intellectuelle de l'ensemble du matériel présent sur MdinaMapper. Tous les droits de propriété intellectuelle sont réservés. Vous pouvez y accéder à partir de MdinaMapper pour votre usage personnel, sous réserve des restrictions fixées dans les présentes conditions générales.<br/>
            </p>
            Vous ne devez pas :<br/>
            <ul className="list-disc ml-4 p-4">
              <li>Copier ou republier des éléments provenant de MdinaMapper.</li>
              <li>Vendre, louer ou concéder une sous-licence pour le matériel provenant de MdinaMapper.</li>
              <li>Reproduire, dupliquer ou copier le matériel provenant de MdinaMapper.</li>
              <li>Redistribuer le contenu de MdinaMapper</li>
              <li>Le présent accord prend effet à la date des présentes.</li>
            </ul>

            <p className="py-2">
            Certaines parties de ce site web offrent aux utilisateurs la possibilité de publier et d'échanger des opinions et des informations dans certaines zones du site web. Mdina Mapper ne filtre pas, n'édite pas, ne publie pas et ne révise pas les commentaires avant leur présence sur le site web. Les commentaires ne reflètent pas les vues et opinions de Mdina Mapper, de ses agents et/ou de ses affiliés. Les commentaires reflètent les vues et opinions de la personne qui les publie. Dans la mesure où les lois applicables le permettent, Mdina Mapper ne peut être tenu responsable des commentaires ou de toute responsabilité, de tout dommage ou de toute dépense causés et/ou subis à la suite de l'utilisation et/ou de l'affichage et/ou de l'apparition des commentaires sur ce site web.<br/>
            </p>
            <p className="py-2">
            Mdina Mapper se réserve le droit de surveiller tous les commentaires et de supprimer tout commentaire qui peut être considéré comme inapproprié, offensant, ou qui entraîne une violation des présentes conditions générales.<br/>
            </p>
            
            <h3 className="text-xl font-bold py-4">Vous garantissez et déclarez que :</h3>
            <ul className="list-disc ml-4 p-4">
              <li>Vous avez le droit de publier les commentaires sur notre site web et disposez de toutes les licences et de tous les consentements nécessaires pour le faire ;</li>
              <li>Les commentaires n'envahissent aucun droit de propriété intellectuelle, y compris, sans limitation, le droit d'auteur, le brevet ou la marque de commerce d'un tiers ;</li>
              <li>Les Commentaires ne contiennent aucun élément diffamatoire, calomnieux, offensant, indécent ou autrement illégal, constituant une atteinte à la vie privée.</li>
              <li>Les Commentaires ne seront pas utilisés pour solliciter ou promouvoir des affaires ou des coutumes ou présenter des activités commerciales ou des activités illégales.</li>
              <li>Par la présente, vous accordez à Mdina Mapper une licence non exclusive pour utiliser, reproduire, éditer et autoriser d'autres personnes à utiliser, reproduire et éditer n'importe lequel de vos commentaires sous toutes les formes, formats ou médias.<br/></li>
            </ul>

            <h3 className="text-xl font-bold py-4">L'établissement d'hyperliens vers notre contenu :</h3>
            <h4>Les organisations suivantes peuvent créer des liens vers notre site web sans autorisation écrite préalable :</h4>

            <ul className="list-disc ml-4 p-4">
              <li>Les agences gouvernementales ;</li>
              <li>Moteurs de recherche ;</li>
              <li>Organismes de presse ;</li>
              <li>Les distributeurs d'annuaires en ligne peuvent créer des liens vers notre site web de la même manière qu'ils créent des hyperliens vers les sites web d'autres entreprises répertoriées ; et...</li>
              <li>Les entreprises accréditées à l'échelle du système, à l'exception des organismes à but non lucratif de sollicitation, des centres commerciaux de bienfaisance et des groupes de collecte de fonds de bienfaisance qui ne peuvent pas établir d'hyperlien vers notre site Web.</li>
            </ul>
            
            
            
            <p className="py-2">
            Ces organisations peuvent créer des liens vers notre page d'accueil, vers des publications ou vers d'autres informations du site web, tant que le lien : (a) n'est en aucun cas trompeur ; (b) n'implique pas faussement le parrainage, l'approbation ou le soutien de la partie liante et de ses produits et/ou services ; et (c) s'inscrit dans le contexte du site de la partie liante.<br/>
            </p>
            <p className="py-2">
            Nous pouvons prendre en considération et approuver d'autres demandes de liens provenant des types d'organisations suivantes :<br/>
            </p>

            <ul className="list-disc ml-4 p-4">
              <li>les sources d'information communément connues des consommateurs et/ou des entreprises ;</li>
              <li>les sites communautaires point.com ;</li>
              <li>les associations ou autres groupes représentant des organismes de bienfaisance ;</li>
              <li>les distributeurs d'annuaires en ligne ;</li>
              <li>les portails internet ;</li>
              <li>les cabinets de comptabilité, d'avocats et de consultants ; et</li>
              <li>les établissements d'enseignement et les associations professionnelles.</li>
            </ul>
            
            <p className="py-2">
              Nous approuverons les demandes de liens de ces organisations si nous décidons que : (a) le lien ne nous donnerait pas une image défavorable de nous-mêmes ou de nos entreprises accréditées ; (b) l'organisation n'a pas de dossier négatif avec nous ; (c) l'avantage que nous retirons de la visibilité de l'hyperlien compense l'absence de Mdina Mapper ; et (d) le lien s'inscrit dans le contexte d'informations générales sur les ressources.
            </p>
            
            <p className="py-2">
            Ces organisations peuvent établir un lien vers notre page d'accueil tant que le lien : (a) n'est en aucun cas trompeur ; (b) n'implique pas faussement le parrainage, l'approbation ou l'aval de la partie liante et de ses produits ou services ; et (c) s'inscrit dans le contexte du site de la partie liante.<br/>

            Si vous êtes l'une des organisations énumérées au paragraphe 2 ci-dessus et que vous souhaitez créer un lien vers notre site web, vous devez nous en informer en envoyant un e-mail à Mdina Mapper. Veuillez inclure votre nom, le nom de votre organisation, vos coordonnées ainsi que l'URL de votre site, une liste de toutes les URL à partir desquelles vous avez l'intention de créer un lien vers notre site web, et une liste des URL de notre site vers lesquelles vous souhaitez créer un lien. Attendez 2 à 3 semaines pour obtenir une réponse.<br/>

            Les organisations approuvées peuvent établir un hyperlien vers notre site web de la manière suivante :<br/>
            </p>

            <ul className="list-disc ml-4 p-4">
              <li>Par l'utilisation de notre dénomination sociale ; ou</li>
              <li>Par l'utilisation du localisateur de ressources uniforme vers lequel le lien est établi ; ou</li>
              <li>Par l'utilisation de toute autre description de notre site web faisant l'objet d'un lien qui a du sens dans le contexte et le format du contenu du site web de la partie liante.</li>
            </ul>

            <p className="py-2">
              Aucune utilisation du logo ou d'autres illustrations de Mdina Mapper ne sera autorisée pour la création de liens en l'absence d'un accord de licence de marque.
            </p>

            <h3 className="text-xl font-bold py-4">Responsabilité du contenu :</h3>
            <p className="py-2">
            Nous ne serons pas tenus responsables du contenu qui apparaît sur votre site web. Vous acceptez de nous protéger et de nous défendre contre toutes les réclamations qui sont soulevées sur votre site web. Aucun lien ne doit apparaître sur un site web qui pourrait être interprété comme diffamatoire, obscène ou criminel, ou qui enfreint, viole de toute autre manière, ou préconise l'infraction ou toute autre violation des droits d'un tiers.<br/>
            </p>

            <h3 className="text-xl font-bold py-4">Réserve de droits :</h3>
            <p className="py-2">
            Nous nous réservons le droit de vous demander de supprimer tous les liens ou un lien particulier vers notre site web. Vous acceptez de retirer immédiatement tous les liens vers notre site web sur demande. Nous nous réservons également le droit de modifier à tout moment les présentes conditions générales et sa politique en matière de liens. En établissant continuellement des liens vers notre site web, vous acceptez d'être lié à ces conditions générales de liaison et de les suivre.<br/>
            </p>

            <h3 className="text-xl font-bold py-4">Suppression des liens de notre site web :</h3>
            <p className="py-2">
            Si vous trouvez un lien sur notre site web qui est offensant pour une raison quelconque, vous êtes libre de nous contacter et de nous informer à tout moment. Nous examinerons les demandes de suppression de liens, mais nous ne sommes pas obligés de le faire ou de vous répondre directement.<br/>

            Nous ne garantissons pas l'exactitude des informations figurant sur ce site web. Nous ne garantissons pas leur exhaustivité ou leur exactitude, et nous ne promettons pas non plus de garantir que le site web reste disponible ou que le matériel sur le site web est maintenu à jour.<br/>
            </p>

            <h3 className="text-xl font-bold py-4">Avis de non-responsabilité :</h3>
            <p className="py-2">
            Dans la mesure maximale autorisée par la loi applicable, nous excluons toutes les représentations, garanties et conditions relatives à notre site web et à l'utilisation de ce site web. Rien dans cette clause de non-responsabilité ne pourra :<br/>
            </p>

            <ul className="list-disc ml-4 p-4">
              <li>limiter ou exclure notre ou votre responsabilité en cas de décès ou de dommages corporels ;</li>
              <li>limiter ou exclure notre ou votre responsabilité en cas de fraude ou de fausse déclaration frauduleuse ;</li>
              <li>limiter l'une de nos ou de vos responsabilités d'une manière qui n'est pas autorisée par la loi applicable ; ou</li>
              <li>exclure l'une de nos ou de vos responsabilités qui ne peuvent être exclues en vertu de la loi applicable.</li>
            </ul>

            <p className="py-2">
            Les limitations et interdictions de responsabilité fixées dans cette section et ailleurs dans cette clause de non-responsabilité : (a) sont soumises au paragraphe précédent ; et (b) régissent toutes les responsabilités découlant de la clause de non-responsabilité, y compris les responsabilités contractuelles, délictuelles et pour violation d'une obligation légale.<br/>

            Tant que le site web et les informations et services du site web sont fournis gratuitement, nous ne serons pas responsables de toute perte ou dommage de quelque nature que ce soit.<br/>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block py-20">
          <PageFooter />
      </div>
      <div className="md:hidden py-10">
          <MobileFooter />
      </div>
      <div className="fixed bottom-0 right-0 mr-10 mb-24 lg:m-20 rounded-sm bg-black">
        <Icon.ArrowUp className="cursor-pointer" color="white" size={30} 
          onClick={() => window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })}
        />
      </div>
    </div>
  )
}