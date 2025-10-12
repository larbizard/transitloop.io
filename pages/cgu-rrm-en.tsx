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
                            <strong>"Rabat Region Mobility" and/or "RRM"</strong>: a Moroccan joint-stock company, with its registered office at 1 Rue Ghafsa, Place Al Joulane, Rabat, Morocco, registered in the Rabat Commercial Register under number 75799, TransitLoop partner for providing the aforementioned mobility services.
                        </p>
                        <p className="py-2">
                            <strong>"Transdev Rabat-Salé"</strong>: operator of the Rabat-Salé tramway, RRM partner for tramway service operation.
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
                            <strong>"Secret Code" / "Password"</strong>: temporary code sent via SMS or WhatsApp to the user's phone number for secure access to the Client Account.
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
                            <li>Respective rights and obligations of the Client and TransitLoop in using the Application.</li>
                        </ul>

                        <h3 className="text-xl font-bold py-4">Article 2: Modification</h3>
                        <p className="py-2">
                            These Terms and Conditions may be modified by TransitLoop in case of regulatory, technical, or commercial evolution. The Client will be informed by any appropriate means. The absence of objection within 30 days following the information constitutes acceptance.
                        </p>

                        <h3 className="text-xl font-bold py-4">Article 3: Duration and Entry into Force</h3>
                        <p className="py-2">
                            The Contract takes effect from the opening of the Client Account and acceptance of these Terms and Conditions, and remains valid until its closure by the Client or TransitLoop.
                        </p>

                        <h3 className="text-xl font-bold py-4">Article 4: Account Opening and Activation</h3>
                        <ul className="list-disc ml-4 p-4">
                            <li>Account opening is free.</li>
                            <li>It is reserved for natural persons with a smartphone and internet connection.</li>
                            <li>Registration requires only providing the phone number.</li>
                            <li>Name and surname are optional and can be added by the user in their profile after registration to personalize their experience.</li>
                            <li>TransitLoop may suspend an Account in case of fraud, false declaration, or upon request from authorities.</li>
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
                            <li>Account access is protected by a temporary code sent via SMS or WhatsApp to the user's phone number.</li>
                            <li>The Client is responsible for the confidentiality of their credentials.</li>
                            <li>In case of loss, theft, or fraud, the Client must immediately inform Customer Service.</li>
                            <li>After 3 consecutive failures, Account access is blocked.</li>
                        </ul>

                        <h3 className="text-xl font-bold py-4">Article 7: Account Closure</h3>
                        <p className="py-2">The Account may be closed:</p>
                        <ul className="list-disc ml-4 p-4">
                            <li><strong>By the Client</strong>: at any time, without fees. Personal data will be deleted in accordance with applicable regulations.</li>
                            <li><strong>By TransitLoop</strong>: in case of death, fraud, false declaration, request from an authority, 12 months of inactivity, or violation of these Terms and Conditions.</li>
                        </ul>

                        <h3 className="text-xl font-bold py-4">Article 8: Fare Information</h3>
                        <ul className="list-disc ml-4 p-4">
                            <li>The Application displays fares for different transport modes for informational purposes only.</li>
                            <li>Displayed fares may vary and are not contractual.</li>
                            <li>The Client must inquire with transport operators for official fares and ticket purchases.</li>
                        </ul>

                        <h3 className="text-xl font-bold py-4">Article 9: Personal Data Protection</h3>
                        <p className="py-2">
                            In accordance with Article 5 of Moroccan law n°09-08 relating to the protection of natural persons with regard to the processing of personal data, users are informed of the following characteristics of the processing of their data:
                        </p>

                        <h4 className="text-lg font-semibold py-2">9.1. Data Controller</h4>
                        <p className="py-2">
                            <strong>TransitLoop</strong><br />
                            Registered office: 310, rue Omar Riffi, 20250 Casablanca, Morocco<br />
                            Trade register: Casablanca n° 671237<br />
                            Contact: contact@transitloop.io<br />
                            <br />
                            <strong>Rabat Region Mobility (RRM)</strong> - Partner<br />
                            Registered office: 1 Rue Ghafsa, Place Al Joulane, Rabat, Morocco<br />
                            Trade register: Rabat n° 75799
                        </p>

                        <h4 className="text-lg font-semibold py-2">9.2. Processing Purposes</h4>
                        <ul className="list-disc ml-4 p-4">
                            <li>Provision of multimodal route planning services</li>
                            <li>Calculation and comparison of routes (tramway, bus, motorcycle, parking)</li>
                            <li>User experience personalization</li>
                            <li>Improvement of public transport services</li>
                            <li>Compliance with legal and regulatory obligations</li>
                        </ul>

                        <h4 className="text-lg font-semibold py-2">9.3. Data Collected</h4>
                        <ul className="list-disc ml-4 p-4">
                            <li><strong>Mandatory data:</strong> Phone number</li>
                            <li><strong>Optional data:</strong> Name, surname (for profile personalization)</li>
                            <li><strong>Technical data:</strong> IP address, cookies, geolocation data (if authorized)</li>
                            <li><strong>Usage data:</strong> Route search history, transport preferences</li>
                        </ul>

                        <h4 className="text-lg font-semibold py-2">9.4. Legal Basis for Processing</h4>
                        <p className="py-2">
                            Processing is based on TransitLoop's legitimate interest in providing route planning services and on user consent for optional data.
                        </p>

                        <h4 className="text-lg font-semibold py-2">9.5. Data Recipients</h4>
                        <ul className="list-disc ml-4 p-4">
                            <li>TransitLoop (data controller)</li>
                            <li>Rabat Region Mobility (RRM) - partner for route planning services</li>
                            <li>Competent authorities (upon legal request)</li>
                        </ul>
                        <p className="py-2">
                            <strong>Note:</strong> Transport partners (tramway, bus, motorcycle, parking operators) do not receive personal data. Only anonymized route information is used for planning purposes.
                        </p>

                        <h4 className="text-lg font-semibold py-2">9.6. Retention Period</h4>
                        <p className="py-2">
                            Personal data is retained for the duration of user account usage and up to 3 years after account closure, unless there is a contrary legal obligation.
                        </p>

                        <h4 className="text-lg font-semibold py-2">9.7. User Rights</h4>
                        <p className="py-2">
                            In accordance with law 09-08, you have the following rights:
                        </p>
                        <ul className="list-disc ml-4 p-4">
                            <li><strong>Right of access:</strong> obtain a copy of your personal data</li>
                            <li><strong>Right of rectification:</strong> correct inaccurate data</li>
                            <li><strong>Right of opposition:</strong> object to the processing of your data</li>
                            <li><strong>Right of erasure:</strong> request deletion of your data</li>
                            <li><strong>Right of portability:</strong> retrieve your data in a structured format</li>
                        </ul>

                        <h4 className="text-lg font-semibold py-2">9.8. Exercising Rights</h4>
                        <p className="py-2">
                            To exercise your rights, contact us:<br />
                            <strong>Email:</strong> contact@transitloop.io<br />
                            <strong>Mail:</strong> TransitLoop – 310, rue Omar Riffi, 20250 Casablanca, Morocco
                        </p>

                        <h4 className="text-lg font-semibold py-2">9.9. CNDP Declaration</h4>
                        <p className="py-2">
                            This processing has been subject to a declaration / authorization request to the CNDP under number ………… The collected personal data may be transmitted to TransitLoop and to Rabat Region Mobility in accordance with the transfer request filed with the CNDP.
                        </p>

                        <h4 className="text-lg font-semibold py-2">9.10. Complaints</h4>
                        <p className="py-2">
                            You have the right to file a complaint with the CNDP if you believe your rights are not being respected.
                        </p>


                        <h3 className="text-xl font-bold py-4">Article 10: Client Commitments</h3>
                        <p className="py-2">The Client undertakes to:</p>
                        <ul className="list-disc ml-4 p-4">
                            <li>Provide accurate and up-to-date information,</li>
                            <li>Use the Application only within the legal and regulatory framework,</li>
                            <li>Not divert the Application for fraudulent or unauthorized commercial purposes.</li>
                        </ul>

                        <h3 className="text-xl font-bold py-4">Article 11: TransitLoop Responsibilities</h3>
                        <p className="py-2">TransitLoop undertakes to:</p>
                        <ul className="list-disc ml-4 p-4">
                            <li>Provide route planning information within technical constraints,</li>
                            <li>Ensure regulatory compliance of its information services,</li>
                            <li>Inform the Client in case of technical interruption of planning services.</li>
                        </ul>
                        <p className="py-2">TransitLoop is not responsible for:</p>
                        <ul className="list-disc ml-4 p-4">
                            <li>Accuracy of information provided by transport operators,</li>
                            <li>Malfunctions related to the Client's smartphone or mobile network,</li>
                            <li>Delays or disruptions related to a transport mode,</li>
                            <li>Force majeure cases.</li>
                        </ul>

                        <h3 className="text-xl font-bold py-4">Article 12: Complaints</h3>
                        <p className="py-2">The Client may address any complaint:</p>
                        <ul className="list-disc ml-4 p-4">
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
