import * as Icon from 'react-feather'
import Head from 'next/head'
import Link from 'next/link'

export default function TermsOfUse() {
    return (
        <div className="bg-white text-black h-full scroll-smooth">
            <Head>
                <title>Terms and Conditions of Use</title>
            </Head>

            {/* Language Menu */}
            <div className="fixed top-4 right-4 z-10">
                <div className="flex space-x-2">
                    <Link href="/cgu-rrm-ar" className="px-3 py-1 bg-gray-200 text-black rounded text-sm">العربية</Link>
                    <Link href="/cgu-rrm-fr" className="px-3 py-1 bg-gray-200 text-black rounded text-sm">Français</Link>
                    <Link href="/cgu-rrm-en" className="px-3 py-1 bg-blue-600 text-white rounded text-sm">English</Link>
                </div>
            </div>

            <div className="pt-20">
                <div className="flex flex-row justify-center">
                    <div className="p-8 lg:px-20">
                        <h1 className="text-2xl font-bold text-left mb-6">
                            TERMS AND CONDITIONS OF USE
                        </h1>
                        <h2 className="text-xl font-bold py-4 text-left">
                            for the MaaS Rabat Region Mobility Application
                        </h2>

                        <h3 className="text-xl font-bold py-4">Definitions</h3>
                        <p className="py-2">
                            <strong>"MaaS Rabat Region Mobility Application" and/or "Application"</strong>: the mobile application allowing the Client to access route planning and calculation services for transport modes operated and/or managed by Rabat Region Mobility (RRM), namely: Rabat-Salé Tramway, Rabat Buses, Motorcycles, and RRM-managed Parking.
                        </p>
                        <p className="py-2">
                            <strong>"Rabat Region Mobility" and/or "RRM"</strong>: a Moroccan joint-stock company, with its registered office at 1 Rue Ghafsa, Place Al Joulane, Rabat, Morocco, registered in the Rabat Commercial Register under number 75799, publisher of the Application and responsible for managing and marketing the aforementioned mobility services.
                        </p>
                        <p className="py-2">
                            <strong>"Client"</strong>: any natural person who has opened a Client Account in the Application, resident or non-resident in Morocco.
                        </p>
                        <p className="py-2">
                            <strong>"Client Account"</strong>: personal account created by the Client via the Application, accessible by username and password, allowing the use of the proposed Services.
                        </p>
                        <p className="py-2">
                            <strong>"MaaS Services"</strong>: refer to all services offered by the Application, namely: trip planning, multimodal route calculation, transport options comparison, and information on available transport modes (tramway, buses, motorcycles, RRM parking).
                        </p>
                        <p className="py-2">
                            <strong>"Secret Code" / "Password"</strong>: personalized security device allowing secure access to the Client Account.
                        </p>
                        <p className="py-2">
                            <strong>"Customer Service"</strong>: service responsible for receiving and processing Client complaints.
                        </p>
                        <p className="py-2">
                            <strong>"Parties"</strong>: collectively refer to RRM and the Client.
                        </p>

                        <h3 className="text-xl font-bold py-4">Article 1: Purpose</h3>
                        <p className="py-2">
                            These Terms and Conditions define:
                        </p>
                        <ul className="list-disc ml-4 p-4">
                            <li>The terms and conditions for opening, using, and closing the Client Account,</li>
                            <li>Rules applicable to the use of route planning and calculation services,</li>
                            <li>Respective rights and obligations of the Client and RRM in using the Application.</li>
                        </ul>

                        <h3 className="text-xl font-bold py-4">Article 2: Modification</h3>
                        <p className="py-2">
                            These Terms and Conditions may be modified by RRM in case of regulatory, technical, or commercial evolution. The Client will be informed by any appropriate means. The absence of objection within 30 days following the information constitutes acceptance.
                        </p>

                        <h3 className="text-xl font-bold py-4">Article 3: Duration and Entry into Force</h3>
                        <p className="py-2">
                            The Contract takes effect from the opening of the Client Account and acceptance of these Terms and Conditions, and remains valid until its closure by the Client or RRM.
                        </p>

                        <h3 className="text-xl font-bold py-4">Article 4: Account Opening and Activation</h3>
                        <ul className="list-disc ml-4 p-4">
                            <li>Account opening is free.</li>
                            <li>It is reserved for natural persons with a smartphone and internet connection.</li>
                            <li>Registration requires providing accurate information (name, surname, ID card, phone, email, etc.).</li>
                            <li>RRM may suspend an Account in case of fraud, false declaration, or upon request from authorities.</li>
                        </ul>

                        <h3 className="text-xl font-bold py-4">Article 5: Account Operation and Services</h3>
                        <p className="py-2">The Client Account allows:</p>
                        <ul className="list-disc ml-4 p-4">
                            <li>Route planning combining Rabat-Salé Tramway, Rabat Buses, Motorcycles, and RRM Parking.</li>
                            <li>Calculation and comparison of multimodal routes with information on travel times, distances, and connections.</li>
                            <li>Consultation of practical information on transport modes (schedules, fares, accessibility).</li>
                            <li>Management of transport preferences and saving of favorite routes.</li>
                        </ul>
                        <p className="py-2">
                            The Application provides only planning information and does not allow the purchase, reservation, or validation of transport tickets.
                        </p>

                        <h3 className="text-xl font-bold py-4">Article 6: Security and Confidentiality</h3>
                        <ul className="list-disc ml-4 p-4">
                            <li>Account access is protected by a password/Secret code chosen by the Client.</li>
                            <li>The Client is responsible for the confidentiality of their credentials.</li>
                            <li>In case of loss, theft, or fraud, the Client must immediately inform Customer Service.</li>
                            <li>After 3 consecutive failures, Account access is blocked.</li>
                        </ul>

                        <h3 className="text-xl font-bold py-4">Article 7: Account Closure</h3>
                        <p className="py-2">The Account may be closed:</p>
                        <ul className="list-disc ml-4 p-4">
                            <li><strong>By the Client</strong>: at any time, without fees. Personal data will be deleted in accordance with applicable regulations.</li>
                            <li><strong>By RRM</strong>: in case of death, fraud, false declaration, request from an authority, 12 months of inactivity, or violation of these Terms and Conditions.</li>
                        </ul>

                        <h3 className="text-xl font-bold py-4">Article 8: Fare Information</h3>
                        <ul className="list-disc ml-4 p-4">
                            <li>The Application displays fares for different transport modes for informational purposes only.</li>
                            <li>Displayed fares may vary and are not contractual.</li>
                            <li>The Client must inquire with transport operators for official fares and ticket purchases.</li>
                        </ul>

                        <h3 className="text-xl font-bold py-4">Article 9: Personal Data Protection</h3>
                        <ul className="list-disc ml-4 p-4">
                            <li>Client data is processed by RRM in accordance with Moroccan law n°09-08.</li>
                            <li>It may be transmitted only to partners involved in route planning services (tramway, bus, motorcycle, parking operators).</li>
                            <li>The Client has the right to access, rectification, and opposition.</li>
                        </ul>

                        <h3 className="text-xl font-bold py-4">Article 10: Client Commitments</h3>
                        <p className="py-2">The Client undertakes to:</p>
                        <ul className="list-disc ml-4 p-4">
                            <li>Provide accurate and up-to-date information,</li>
                            <li>Use the Application only within the legal and regulatory framework,</li>
                            <li>Not divert the Application for fraudulent or unauthorized commercial purposes.</li>
                        </ul>

                        <h3 className="text-xl font-bold py-4">Article 11: RRM Responsibilities</h3>
                        <p className="py-2">RRM undertakes to:</p>
                        <ul className="list-disc ml-4 p-4">
                            <li>Provide route planning information within technical constraints,</li>
                            <li>Ensure regulatory compliance of its information services,</li>
                            <li>Inform the Client in case of technical interruption of planning services.</li>
                        </ul>
                        <p className="py-2">RRM is not responsible for:</p>
                        <ul className="list-disc ml-4 p-4">
                            <li>Accuracy of information provided by transport operators,</li>
                            <li>Malfunctions related to the Client's smartphone or mobile network,</li>
                            <li>Delays or disruptions related to a transport mode,</li>
                            <li>Force majeure cases.</li>
                        </ul>

                        <h3 className="text-xl font-bold py-4">Article 12: Complaints</h3>
                        <p className="py-2">The Client may address any complaint:</p>
                        <ul className="list-disc ml-4 p-4">
                            <li>By phone: 05 XX XX XX XX</li>
                            <li>By email: [official RRM address]</li>
                            <li>By mail: Rabat Region Mobility – 1 Rue Ghafsa, Place Al Joulane, Rabat, Morocco</li>
                        </ul>

                        <h3 className="text-xl font-bold py-4">Article 13: Applicable Law and Disputes</h3>
                        <ul className="list-disc ml-4 p-4">
                            <li>These Terms and Conditions are governed by Moroccan law.</li>
                            <li>In case of dispute, the Parties will attempt an amicable resolution. Failing that, the competent courts are those of Rabat.</li>
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
