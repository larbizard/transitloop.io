import { useTranslation } from "react-i18next";
import {
  ArrowPathIcon,
  BellAlertIcon,
  BuildingLibraryIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  PaperAirplaneIcon,
  PuzzlePieceIcon,
  RectangleStackIcon,
  RssIcon,
  ScaleIcon,
  SignalIcon,
  Square3Stack3DIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import Feature from "./Feature";
import Founder from "./Founder";
import DownloadApp from "./DownloadApp";

const amoFeatures = {
  title: "Accompagnement en Assistance à Maîtrise d’Ouvrage",
  features: [
    {
      name: "Faciliter la prise de décision",
      description:
        "Aider nos partenaires à clarifier leurs besoins et à définir des objectifs réalistes et mesurables.",
      icon: BuildingLibraryIcon,
    },
    {
      name: "Garantir la qualité des livrables",
      description:
        "Superviser et contrôler toutes les étapes du projet pour garantir un résultat conforme aux attentes.",
      icon: PaperAirplaneIcon,
    },
    {
      name: "Optimiser les ressources",
      description:
        "Réduire les coûts et les délais grâce à une gestion efficace et une expertise spécialisée.",
      icon: RectangleStackIcon,
    },
    {
      name: "Assurer la conformité",
      description:
        "Vérifier que les projets respectent les normes réglementaires et les standards internationaux (notamment en matière de mobilité et de données).",
      icon: ScaleIcon,
    },
  ],
};

const appFeatures = {
  title: "Application en Marque blanche",
  features: [
    {
      name: "Planification d’itinéraires, mobilité multimodale, alertes en temps réel",
      description:
        "L'application permet de planifier des itinéraires multimodaux, de recevoir des alertes en temps réel et de consulter des informations sur les transports en commun.",
      icon: BellAlertIcon,
    },
    {
      name: "Intégrations possibles à differents modes de tansport",
      description:
        "L'application peut être intégrée à différents modes de transport (bus, train, vélo, marche, etc.) et à des services tiers (météo, trafic, etc.).",
      icon: RssIcon,
    },
  ],
};

const dataFeatures = {
  title: "Production de données structurées",
  features: [
    {
      name: "Création et structuration de données GTFS théoriques",
      description:
        "Structuration des données statiques des réseaux de transport (horaires, itinéraires, arrêts, tarifs). Construction et validation des fichiers GTFS conformes aux normes internationales",
      icon: Square3Stack3DIcon,
    },
    {
      name: "Intégrations à des plateformes tierces",
      description:
        "Intégration des données avec Google Transit pour une visibilité accrue auprès des usagers",
      icon: SwatchIcon,
    },
    {
      name: "Génération de flux temps réel",
      description:
        "Génération de flux temps réel sur les positions des véhicules, les horaires de passage, et les incidents de service. Développement de solutions pour récupérer, transformer et diffuser ces données en temps réel. Optimisation des flux pour garantir une fiabilité et une actualisation rapide.",
      icon: SignalIcon,
    },
    {
      name: "Développement et gestion d’API de mobilité",
      description:
        "Création d’API robustes permettant l’échange de données entre les opérateurs, les applications tierces et les utilisateurs finaux. Personnalisation d’API pour répondre aux besoins spécifiques des opérateurs ou des collectivités (gestion des itinéraires, tracking des véhicules, calcul de trajets multimodaux). Surveillance et maintenance des API pour garantir une disponibilité et une performance continue.",
      icon: PuzzlePieceIcon,
    },
  ],
};

const Features = () => {
  return (
    <div className="">
      <Feature {...amoFeatures} />
      <Founder />
      <Feature {...appFeatures} />
      <DownloadApp />
      <Feature {...dataFeatures} />
    </div>
  );
};

export default Features;
