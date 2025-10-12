import * as Icon from 'react-feather'
import Head from 'next/head'
import Link from 'next/link'


export default function TermsOfUse() {
  return (
    <div className="bg-white text-black h-full scroll-smooth">
      <Head>
        <title>Conditions générales d'utilisation</title>
      </Head>

      {/* Language Menu */}
      <div className="fixed top-4 right-4 z-10">
        <div className="flex space-x-2">
          <Link href="/cgu-rrm-ar" className="px-3 py-1 bg-gray-200 text-black rounded text-sm">العربية</Link>
          <Link href="/cgu-rrm-fr" className="px-3 py-1 bg-blue-600 text-white rounded text-sm">Français</Link>
          <Link href="/cgu-rrm-en" className="px-3 py-1 bg-gray-200 text-black rounded text-sm">English</Link>
        </div>
      </div>

      <div className="pt-20">
        <div className="flex flex-row justify-center">
          <div className="p-8 lg:px-20">
            <h1 className="text-2xl font-bold">
              CONDITIONS GÉNÉRALES D'UTILISATION (CGU)
            </h1>
            <h2 className="text-xl font-bold py-4">
              de l'Application MaaS Rabat Région Mobilité
            </h2>

            <h3 className="text-xl font-bold py-4">Définitions</h3>
            <p className="py-2">
              <strong>« Application MaaS Rabat Région Mobilité » et/ou l'« Application »</strong> : désigne l'application mobile permettant au Client d'accéder aux services de planification et de calcul d'itinéraires pour les modes de transport opérés et/ou gérés par Rabat Région Mobilité (RRM), à savoir : le Tramway Rabat-Salé, les Bus de Rabat, les Vélo-Taxis et les Parkings gérés par RRM.
            </p>
            <p className="py-2">
              <strong>« Rabat Région Mobilité » et/ou « RRM »</strong> : société anonyme de droit marocain, ayant son siège social sis au 1 Rue Ghafsa, Place Al Joulane, Rabat, Maroc, inscrite au registre de commerce de Rabat sous le numéro 75799, éditrice de l'Application et responsable de la gestion et de la commercialisation des services de mobilité susmentionnés.
            </p>
            <p className="py-2">
              <strong>« Transdev Rabat-Salé »</strong> : exploitant du tramway Rabat-Salé, partenaire de la RRM pour l'exploitation du service de tramway.
            </p>
            <p className="py-2">
              <strong>« Client »</strong> : toute personne physique ayant ouvert un Compte Client dans l'Application, résidente ou non au Maroc.
            </p>
            <p className="py-2">
              <strong>« Compte Client »</strong> : compte personnel créé par le Client via l'Application, accessible par identifiant et mot de passe, permettant l'utilisation des Services proposés.
            </p>
            <p className="py-2">
              <strong>« Services MaaS »</strong> : désignent l'ensemble des services proposés par l'Application, à savoir : planification de trajets, calcul d'itinéraires multimodaux, comparaison d'options de transport et informations sur les modes de transport disponibles (tramway, bus, vélo-taxi, parkings RRM).
            </p>
            <p className="py-2">
              <strong>« Code secret » / « Mot de passe »</strong> : dispositif de sécurité personnalisé permettant l'accès sécurisé au Compte Client.
            </p>
            <p className="py-2">
              <strong>« Service Client »</strong> : service en charge de la réception et du traitement des réclamations des Clients.
            </p>
            <p className="py-2">
              <strong>« Parties »</strong> : désignent collectivement la RRM et le Client.
            </p>

            <h3 className="text-xl font-bold py-4">Article 1 : Objet</h3>
            <p className="py-2">
              Les présentes CGU définissent :
            </p>
            <ul className="list-disc ml-4 p-4">
              <li>Les modalités d'ouverture, d'utilisation et de clôture du Compte Client,</li>
              <li>Les règles applicables à l'utilisation des services de planification et de calcul d'itinéraires,</li>
              <li>Les droits et obligations respectifs du Client et de TransitLoop dans l'utilisation de l'Application.</li>
            </ul>

            <h3 className="text-xl font-bold py-4">Article 2 : Modification</h3>
            <p className="py-2">
              Les CGU peuvent être modifiées par la RRM en cas d'évolution réglementaire, technique ou commerciale. Le Client sera informé par tout moyen approprié. L'absence de contestation dans les 30 jours suivant l'information vaut acceptation.
            </p>

            <h3 className="text-xl font-bold py-4">Article 3 : Durée et Entrée en vigueur</h3>
            <p className="py-2">
              Le Contrat prend effet à compter de l'ouverture du Compte Client et de l'acceptation des CGU, et reste valable jusqu'à sa clôture par le Client ou par la RRM.
            </p>

            <h3 className="text-xl font-bold py-4">Article 4 : Ouverture et Activation du Compte</h3>
            <ul className="list-disc ml-4 p-4">
              <li>L'ouverture du Compte est gratuite.</li>
              <li>Elle est réservée aux personnes physiques disposant d'un smartphone et d'une connexion internet.</li>
              <li>L'inscription nécessite uniquement la fourniture du numéro de téléphone.</li>
              <li>Le nom et prénom sont optionnels et peuvent être ajoutés par l'utilisateur dans son profil après inscription pour personnaliser son expérience.</li>
              <li>La RRM peut suspendre un Compte en cas de fraude, fausse déclaration ou sur demande des autorités.</li>
            </ul>

            <h3 className="text-xl font-bold py-4">Article 5 : Fonctionnement du Compte et Services</h3>
            <p className="py-2">Le Compte Client permet :</p>
            <ul className="list-disc ml-4 p-4">
              <li>Planification d'itinéraires combinant le Tramway Rabat-Salé, les Bus de Rabat, les Vélo-Taxis et les Parkings RRM.</li>
              <li>Calcul et comparaison d'itinéraires multimodaux avec informations sur les temps de trajet, distances et correspondances.</li>
              <li>Consultation des informations pratiques sur les modes de transport (horaires, tarifs, accessibilité).</li>
              <li>Gestion des préférences de transport et sauvegarde des itinéraires favoris.</li>
            </ul>
            <p className="py-2">
              L'Application fournit uniquement des informations de planification et ne permet pas l'achat, la réservation ou la validation de titres de transport.
            </p>

            <h3 className="text-xl font-bold py-4">Article 6 : Sécurité et Confidentialité</h3>
            <ul className="list-disc ml-4 p-4">
              <li>L'accès au Compte est protégé par un mot de passe/Code secret choisi par le Client.</li>
              <li>Le Client est responsable de la confidentialité de ses identifiants.</li>
              <li>En cas de perte, vol ou fraude, le Client doit immédiatement informer le Service Client.</li>
              <li>Après 3 échecs consécutifs, l'accès au Compte est bloqué.</li>
            </ul>

            <h3 className="text-xl font-bold py-4">Article 7 : Clôture du Compte</h3>
            <p className="py-2">Le Compte peut être clôturé :</p>
            <ul className="list-disc ml-4 p-4">
              <li><strong>Par le Client</strong> : à tout moment, sans frais. Les données personnelles seront supprimées conformément à la réglementation en vigueur.</li>
              <li><strong>Par la RRM</strong> : en cas de décès, fraude, fausse déclaration, demande d'une autorité, inactivité de 12 mois, ou violation des CGU.</li>
            </ul>

            <h3 className="text-xl font-bold py-4">Article 8 : Informations Tarifaires</h3>
            <ul className="list-disc ml-4 p-4">
              <li>L'Application affiche les tarifs des différents modes de transport à titre informatif uniquement.</li>
              <li>Les tarifs affichés peuvent varier et ne sont pas contractuels.</li>
              <li>Le Client doit se renseigner auprès des opérateurs de transport pour les tarifs officiels et l'achat de titres.</li>
            </ul>

            <h3 className="text-xl font-bold py-4">Article 9 : Protection des Données Personnelles</h3>
            <p className="py-2">
              Conformément à l'article 5 de la loi marocaine n°09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, les utilisateurs sont informés des caractéristiques suivantes du traitement de leurs données :
            </p>

            <h4 className="text-lg font-semibold py-2">9.1. Responsable du traitement</h4>
            <p className="py-2">
              <strong>TransitLoop</strong><br />
              Siège social : [adresse TransitLoop]<br />
              Contact : contact@transitloop.io<br />
              <br />
              <strong>Rabat Région Mobilité (RRM)</strong> - Partenaire<br />
              Siège social : 1 Rue Ghafsa, Place Al Joulane, Rabat, Maroc<br />
              Registre de commerce : Rabat n° 75799
            </p>

            <h4 className="text-lg font-semibold py-2">9.2. Finalités du traitement</h4>
            <ul className="list-disc ml-4 p-4">
              <li>Fourniture des services de planification d'itinéraires multimodaux</li>
              <li>Calcul et comparaison d'itinéraires (tramway, bus, vélo-taxi, parkings)</li>
              <li>Personnalisation de l'expérience utilisateur</li>
              <li>Amélioration des services de transport public</li>
              <li>Respect des obligations légales et réglementaires</li>
            </ul>

            <h4 className="text-lg font-semibold py-2">9.3. Données collectées</h4>
            <ul className="list-disc ml-4 p-4">
              <li><strong>Données obligatoires :</strong> Numéro de téléphone</li>
              <li><strong>Données optionnelles :</strong> Nom, prénom (pour personnalisation du profil)</li>
              <li><strong>Données techniques :</strong> Adresse IP, cookies, données de géolocalisation (si autorisées)</li>
              <li><strong>Données d'usage :</strong> Historique des recherches d'itinéraires, préférences de transport</li>
            </ul>

            <h4 className="text-lg font-semibold py-2">9.4. Base légale du traitement</h4>
            <p className="py-2">
              Le traitement est fondé sur l'intérêt légitime de TransitLoop à fournir des services de planification d'itinéraires et sur le consentement de l'utilisateur pour les données optionnelles.
            </p>

            <h4 className="text-lg font-semibold py-2">9.5. Destinataires des données</h4>
            <ul className="list-disc ml-4 p-4">
              <li>TransitLoop (responsable du traitement)</li>
              <li>Rabat Région Mobilité (RRM) - partenaire pour les services de planification</li>
              <li>Autorités compétentes (sur demande légale)</li>
            </ul>
            <p className="py-2">
              <strong>Note :</strong> Les partenaires de transport (opérateurs de tramway, bus, vélo-taxi, parkings) ne reçoivent pas de données personnelles. Seules des informations anonymisées sur les itinéraires sont utilisées pour la planification.
            </p>

            <h4 className="text-lg font-semibold py-2">9.6. Durée de conservation</h4>
            <p className="py-2">
              Les données personnelles sont conservées pendant la durée d'utilisation du compte utilisateur et jusqu'à 3 ans après la clôture du compte, sauf obligation légale contraire.
            </p>

            <h4 className="text-lg font-semibold py-2">9.7. Droits des utilisateurs</h4>
            <p className="py-2">
              Conformément à la loi 09-08, vous disposez des droits suivants :
            </p>
            <ul className="list-disc ml-4 p-4">
              <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong>Droit de suppression :</strong> demander l'effacement de vos données</li>
              <li><strong>Droit de portabilité :</strong> récupérer vos données dans un format structuré</li>
            </ul>

            <h4 className="text-lg font-semibold py-2">9.8. Exercice des droits</h4>
            <p className="py-2">
              Pour exercer vos droits, contactez-nous :<br />
              <strong>E-mail :</strong> contact@transitloop.io<br />
              <strong>Courrier :</strong> TransitLoop – 310, rue Omar Riffi, 20250 Casablanca, Maroc
            </p>

            <h4 className="text-lg font-semibold py-2">9.9. Déclaration CNDP</h4>
            <p className="py-2">
              Ce traitement a fait l'objet d'une déclaration / demande d'autorisation auprès de la CNDP sous le numéro ………… Les données personnelles collectées peuvent être transmises à TransitLoop et à Rabat Région Mobilité conformément à la demande de transfert déposée auprès de la CNDP.
            </p>

            <h4 className="text-lg font-semibold py-2">9.10. Réclamations</h4>
            <p className="py-2">
              Vous avez le droit d'introduire une réclamation auprès de la CNDP si vous estimez que vos droits ne sont pas respectés.
            </p>


            <h3 className="text-xl font-bold py-4">Article 10 : Engagements du Client</h3>
            <p className="py-2">Le Client s'engage à :</p>
            <ul className="list-disc ml-4 p-4">
              <li>Fournir des informations exactes et à jour,</li>
              <li>Utiliser l'Application uniquement dans le cadre légal et réglementaire,</li>
              <li>Ne pas détourner l'Application à des fins frauduleuses ou commerciales non autorisées.</li>
            </ul>

            <h3 className="text-xl font-bold py-4">Article 11 : Responsabilités de la RRM</h3>
            <p className="py-2">La RRM s'engage à :</p>
            <ul className="list-disc ml-4 p-4">
              <li>Fournir des informations de planification d'itinéraires dans la limite des contraintes techniques,</li>
              <li>Assurer la conformité réglementaire de ses prestations d'information,</li>
              <li>Informer le Client en cas d'interruption technique des services de planification.</li>
            </ul>
            <p className="py-2">La RRM n'est pas responsable :</p>
            <ul className="list-disc ml-4 p-4">
              <li>De l'exactitude des informations fournies par les opérateurs de transport,</li>
              <li>Des pannes liées au smartphone ou réseau mobile du Client,</li>
              <li>Des retards, annulations ou perturbations des services de transport,</li>
              <li>Des cas de force majeure.</li>
            </ul>

            <h3 className="text-xl font-bold py-4">Article 12 : Réclamations</h3>
            <p className="py-2">Le Client peut adresser toute réclamation :</p>
            <ul className="list-disc ml-4 p-4">
              <li>Par téléphone : 05 XX XX XX XX</li>
              <li>Par e-mail : [adresse officielle RRM]</li>
              <li>Par courrier : Rabat Région Mobilité – 1 Rue Ghafsa, Place Al Joulane, Rabat, Maroc</li>
            </ul>

            <h3 className="text-xl font-bold py-4">Article 13 : Droit Applicable et Litiges</h3>
            <ul className="list-disc ml-4 p-4">
              <li>Les CGU sont régies par la loi marocaine.</li>
              <li>En cas de litige, les Parties tenteront une résolution amiable. À défaut, les tribunaux compétents sont ceux de Rabat.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 mr-10 mb-24 lg:m-20 rounded-sm bg-gray-200">
        <Icon.ArrowUp className="cursor-pointer" color="black" size={30}
          onClick={() => window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })}
        />
      </div>
    </div>
  )
}