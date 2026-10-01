import React, { useState } from 'react';
import {
  Smartphone, CreditCard, Eye, Wifi, ChevronDown, ChevronUp,
  AlertTriangle, CheckCircle, XCircle, Info, ShieldAlert, Phone, Share2,
  LockKeyhole, Copy, Check, MessageCircle, Briefcase, Banknote, ShoppingBag,
  KeyRound, Download, Fingerprint, HeartCrack, RotateCcw, MessageSquareWarning,
  HelpCircle, Lightbulb,
} from 'lucide-react';

interface Tip {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ThreatSection {
  id: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  title: string;
  subtitle: string;
  warning: string;
  dos: Tip[];
  donts: string[];
}

const sections: ThreatSection[] = [
  {
    id: 'phone-theft',
    icon: <Smartphone size={22} />,
    color: 'text-error',
    bgColor: 'bg-error/5',
    borderColor: 'border-error/20',
    title: 'Phone Theft & SIM Swapping',
    subtitle: 'What to do before and after your phone is stolen',
    warning: 'In Mukuru and many Nairobi estates, phone snatching happens in seconds. Be ready before it happens.',
    dos: [
      { icon: <CheckCircle size={16} />, title: 'Set a SIM card PIN', description: 'Go to Settings > SIM > SIM Lock. Set a 4-digit PIN. A SIM PIN adds a layer of protection if someone removes your SIM. It does not replace your account and phone security controls.' },
      { icon: <CheckCircle size={16} />, title: 'Write down your IMEI number', description: 'Dial *#06# and note the number. If your phone is stolen, call Safaricom/Airtel with this number to block it permanently.' },
      { icon: <CheckCircle size={16} />, title: 'Enable screen lock always', description: 'Use a PIN, pattern, or fingerprint. Never leave your phone unlocked, even for a second in public.' },
      { icon: <CheckCircle size={16} />, title: 'Know the Safaricom SIM swap block number', description: 'Call 100 or *100# immediately if your SIM is stolen. Ask them to block SIM swap requests on your number.' },
      { icon: <CheckCircle size={16} />, title: 'Back up contacts to Google', description: 'Go to Settings > Accounts > Google > Sync Contacts. If your phone is taken, your contacts are safe online.' },
    ],
    donts: [
      'Do not use your phone while walking or at a matatu stage  -  this is when most snatching happens',
      'Do not ignore SIM replacement SMS alerts  -  if you get one and did not request it, call your carrier immediately',
      'Do not store M-Pesa PIN or bank PINs as a note in your phone',
      'Do not use "0000" or "1234" as your SIM PIN  -  these are the first ones thieves try',
    ],
  },
  {
    id: 'mpesa',
    icon: <CreditCard size={22} />,
    color: 'text-warning',
    bgColor: 'bg-warning/5',
    borderColor: 'border-warning/20',
    title: 'Mobile Money Fraud (M-Pesa Scams)',
    subtitle: 'Common tricks used to steal your M-Pesa money',
    warning: 'Mobile-money scams can be convincing. Treat unexpected payment, reversal, prize, and account-verification messages as untrusted until you verify them independently.',
    dos: [
      { icon: <CheckCircle size={16} />, title: 'Always confirm the name before sending money', description: 'M-Pesa shows the account holder name before you confirm. Read it carefully. If the name is wrong, cancel.' },
      { icon: <CheckCircle size={16} />, title: 'Verify "wrong transfer" claims by calling Safaricom', description: 'If someone says you received their money by mistake, call 100 to verify before sending anything back. A reversal request should be verified through the provider’s official channels before you act.' },
      { icon: <CheckCircle size={16} />, title: 'Check your M-Pesa balance yourself', description: 'Never trust a stranger who says they sent you money. Check your own balance via *334# before doing anything.' },
      { icon: <CheckCircle size={16} />, title: 'Use available account-security controls', description: 'Use the security controls currently offered by your mobile-money provider, and check the provider’s official app, USSD menu, or support channel for the current steps.' },
      { icon: <CheckCircle size={16} />, title: 'Change your M-Pesa PIN regularly', description: 'Go to M-Pesa menu > My Account > Change PIN. Use a PIN that is not your birthday or phone number.' },
    ],
    donts: [
      'Do not share your M-Pesa PIN with anyone  -  not family, not a Safaricom "agent", not anyone',
      'Do not send money back to someone claiming they sent you money by mistake without calling 100 first',
      'Do not respond to SMS saying you have won a prize  -  these are always scams',
      'Do not let anyone "help" you use M-Pesa on your phone in public',
      'Do not use the same PIN for M-Pesa and your phone screen lock',
    ],
  },
  {
    id: 'social-engineering',
    icon: <Eye size={22} />,
    color: 'text-info',
    bgColor: 'bg-info/5',
    borderColor: 'border-info/20',
    title: 'Social Engineering & Phishing',
    subtitle: 'How scammers trick you using words, not technology',
    warning: 'Social engineering means someone is lying to you to steal from you. They sound professional and urgent.',
    dos: [
      { icon: <CheckCircle size={16} />, title: 'Slow down when someone creates urgency', description: 'Scammers always say "act now" or "you will lose your account". Urgency is a warning sign, but it is not proof by itself. Pause and verify the request using a trusted channel.' },
      { icon: <CheckCircle size={16} />, title: 'Call back on official numbers', description: 'If someone calls claiming to be from your bank or Safaricom, hang up and call the official number yourself to verify.' },
      { icon: <CheckCircle size={16} />, title: 'Confirm links before clicking', description: 'Check the full domain before signing in or entering information. Do not rely on logos, familiar wording, or a display name to prove a message is genuine.' },
      { icon: <CheckCircle size={16} />, title: 'Trust your instincts', description: 'If something feels wrong, it probably is. You are allowed to say "I need to think about it" and hang up.' },
    ],
    donts: [
      'Do not give OTP codes (one-time passwords) to anyone  -  not even someone claiming to be from Safaricom',
      'Do not click links sent via WhatsApp or SMS from unknown numbers',
      'Do not fill in your phone number, PIN, or ID number on a website you reached through a text message',
      'Do not trust callers who already know your name and phone number  -  scammers buy lists of this information',
    ],
  },
  {
    id: 'wifi',
    icon: <Wifi size={22} />,
    color: 'text-success',
    bgColor: 'bg-success/5',
    borderColor: 'border-success/20',
    title: 'Public WiFi Dangers',
    subtitle: 'Staying safe on free WiFi at cyber cafes, hotspots, and shops',
    warning: 'Public Wi-Fi can expose you to unsafe networks and interception risks. Modern HTTPS and app encryption help, but sensitive activity is still better done on a trusted connection.',
    dos: [
      { icon: <CheckCircle size={16} />, title: 'Use mobile data for M-Pesa and banking', description: 'Never open your M-Pesa, bank app, or enter passwords on public WiFi. Use your own mobile data for anything financial.' },
      { icon: <CheckCircle size={16} />, title: 'Log out of everything after using a shared computer', description: 'At a cyber cafe, always log out of Gmail, Facebook, and any account before leaving. Clear the browser history too.' },
      { icon: <CheckCircle size={16} />, title: 'Check for HTTPS before entering any information', description: 'Check that the address uses HTTPS and that the domain is the one you intended to visit. HTTPS protects the connection; it does not prove that the site itself is legitimate.' },
      { icon: <CheckCircle size={16} />, title: 'Forget the network after use', description: 'On your phone, go to WiFi settings and tap "Forget" on public networks so your phone does not auto-connect next time.' },
    ],
    donts: [
      'Do not access your bank or M-Pesa on public WiFi or at a cyber cafe',
      'Do not leave a shared computer without logging out of all accounts',
      'Do not connect to WiFi networks named "Free WiFi" or "Airtel Free" without confirming with the shop owner',
      'Do not save passwords in a public computer browser',
    ],
  },
  {
    id: 'whatsapp-hijack',
    icon: <MessageCircle size={22} />,
    color: 'text-success',
    bgColor: 'bg-success/5',
    borderColor: 'border-success/20',
    title: 'WhatsApp & Social Media Account Hijacking',
    subtitle: 'How scammers take over your account and use it to scam your friends',
    warning: 'A common trick: a "friend" messages you saying they sent a code to your number by mistake and asks you to forward it. That code is your WhatsApp login code. Once you send it, they own your account.',
    dos: [
      { icon: <CheckCircle size={16} />, title: 'Turn on WhatsApp Two-Step Verification', description: 'Go to WhatsApp Settings > Account > Two-step verification > Turn on. Set a 6-digit PIN and add an email. Even if someone gets your SMS code, they cannot log in without this PIN.' },
      { icon: <CheckCircle size={16} />, title: 'Check Linked Devices regularly', description: 'Go to WhatsApp Settings > Linked Devices. If you see a computer or browser you do not recognise, tap it and log out immediately.' },
      { icon: <CheckCircle size={16} />, title: 'Turn on 2FA for Facebook, Instagram and TikTok', description: 'Look in Settings > Security (or Accounts Centre > Password and security) and turn on two-factor authentication. An authenticator app is safer than SMS codes.' },
      { icon: <CheckCircle size={16} />, title: 'Verify money requests with a phone call', description: 'If a friend messages asking for urgent money, call them on their normal number before sending anything. Their account may have been hijacked.' },
      { icon: <CheckCircle size={16} />, title: 'Warn your contacts if you are hacked', description: 'Use another phone or post a status to tell friends and family not to send money or codes to your account until you recover it.' },
    ],
    donts: [
      'Do not forward any 6-digit code to anyone  -  even a friend, family member, or "WhatsApp support"',
      'Do not scan WhatsApp Web QR codes for anyone else',
      'Do not click "vote for my niece in this competition" links  -  these often steal your login',
      'Do not ignore login alerts from Facebook, Instagram, or Google  -  check them right away',
    ],
  },
  {
    id: 'fake-jobs',
    icon: <Briefcase size={22} />,
    color: 'text-warning',
    bgColor: 'bg-warning/5',
    borderColor: 'border-warning/20',
    title: 'Fake Jobs & Overseas Job Scams',
    subtitle: 'Job offers that take your money instead of paying you',
    warning: 'Real employers do not charge you to get hired. If a job asks for a registration, medical, training, or visa "processing" fee before you start, treat it as a scam until proven otherwise.',
    dos: [
      { icon: <CheckCircle size={16} />, title: 'Check overseas recruitment agencies', description: 'Before paying or travelling for a job abroad (e.g. Gulf countries), confirm the agency is registered with the National Employment Authority (NEA) on its official website.' },
      { icon: <CheckCircle size={16} />, title: 'Research the company yourself', description: 'Search the company name plus "scam". Find its official website and phone number yourself, and call to confirm the job exists.' },
      { icon: <CheckCircle size={16} />, title: 'Expect a real interview', description: 'Genuine jobs usually involve an interview and a written offer from an official company email, not just a WhatsApp or Telegram chat.' },
      { icon: <CheckCircle size={16} />, title: 'Keep your passport and ID safe', description: 'Never hand over your passport to an agent "for safekeeping". Keep copies with a family member you trust.' },
    ],
    donts: [
      'Do not pay any fee to get a job, interview, or "guaranteed placement"',
      'Do not accept "like and review" or "task" jobs on Telegram that ask you to deposit money to unlock earnings',
      'Do not trust job offers with very high pay for little work or no experience',
      'Do not send copies of your ID, KRA PIN, or bank details before confirming the employer is real',
    ],
  },
  {
    id: 'loan-apps',
    icon: <Banknote size={22} />,
    color: 'text-error',
    bgColor: 'bg-error/5',
    borderColor: 'border-error/20',
    title: 'Digital Loan Apps & Loan Scams',
    subtitle: 'Avoid predatory lenders and fake loan offers',
    warning: 'Some loan apps shame borrowers by calling their contacts, and some "loans" are scams that ask for a fee and never pay out.',
    dos: [
      { icon: <CheckCircle size={16} />, title: 'Use only licensed digital lenders', description: 'Check that the lender appears on the Central Bank of Kenya (CBK) list of licensed Digital Credit Providers on the official CBK website.' },
      { icon: <CheckCircle size={16} />, title: 'Check app permissions before installing', description: 'A loan app does not need access to your contacts, photos, or call logs. If it asks for these, do not install it.' },
      { icon: <CheckCircle size={16} />, title: 'Read the total cost of the loan', description: 'Look at the full repayment amount, fees, and penalties, not just the interest rate. Short-term loans can become very expensive.' },
      { icon: <CheckCircle size={16} />, title: 'Report harassment', description: 'If a lender threatens you or contacts your friends and family, keep screenshots and report it to CBK and the Office of the Data Protection Commissioner (ODPC).' },
    ],
    donts: [
      'Do not pay an "activation", "insurance", or "processing" fee to receive a loan  -  real lenders deduct fees from the loan',
      'Do not install loan apps from links or outside the Play Store / App Store',
      'Do not take a new loan to repay an old one  -  this quickly becomes a debt trap',
      'Do not share your M-Pesa PIN or OTP with a "loan officer"',
    ],
  },
  {
    id: 'online-shopping',
    icon: <ShoppingBag size={22} />,
    color: 'text-info',
    bgColor: 'bg-info/5',
    borderColor: 'border-info/20',
    title: 'Online Shopping Scams',
    subtitle: 'Buying safely on Facebook Marketplace, Instagram, and WhatsApp',
    warning: 'Fake sellers post very cheap phones, electronics, and clothes, then disappear after you send a deposit.',
    dos: [
      { icon: <CheckCircle size={16} />, title: 'Pay on delivery when possible', description: 'Inspect the item first, then pay. Meet in a busy, public place during the day if collecting in person.' },
      { icon: <CheckCircle size={16} />, title: 'Check the till or paybill name', description: 'When paying via Lipa na M-Pesa, confirm the business name shown matches the shop. If it shows a personal name, be careful.' },
      { icon: <CheckCircle size={16} />, title: 'Look for real reviews', description: 'Check how long the page has existed, read comments, and ask friends if they have bought from the seller before.' },
      { icon: <CheckCircle size={16} />, title: 'Keep evidence', description: 'Screenshot the advert, chat, and payment message. These help when reporting to Safaricom or the police.' },
    ],
    donts: [
      'Do not send a deposit to "reserve" an item to a stranger',
      'Do not trust prices that are far below the market price',
      'Do not move the conversation off the platform just because the seller asks',
      'Do not send money for "delivery fees" to a different number than the seller',
    ],
  },
  {
    id: 'passwords-2fa',
    icon: <KeyRound size={22} />,
    color: 'text-success',
    bgColor: 'bg-success/5',
    borderColor: 'border-success/20',
    title: 'Strong Passwords & Two-Factor Authentication',
    subtitle: 'The two simplest ways to protect all your accounts',
    warning: 'If you use the same password everywhere, one leak from any website lets criminals into your email, social media, and more.',
    dos: [
      { icon: <CheckCircle size={16} />, title: 'Use a passphrase', description: 'Combine 3-4 random words, e.g. "Mango-Bicycle-Rain-42". Long passphrases are easier to remember and harder to guess than short complex passwords.' },
      { icon: <CheckCircle size={16} />, title: 'Use a different password for every important account', description: 'Your email password especially must be unique  -  whoever controls your email can reset all your other accounts.' },
      { icon: <CheckCircle size={16} />, title: 'Use a password manager', description: 'Google Password Manager (built into Android and Chrome) or apps like Bitwarden can remember strong passwords for you.' },
      { icon: <CheckCircle size={16} />, title: 'Turn on two-factor authentication (2FA)', description: 'In your account security settings, enable 2-step verification. Then a stolen password alone is not enough to log in. Save the backup codes somewhere safe.' },
    ],
    donts: [
      'Do not use your name, birthday, phone number, or "password123"',
      'Do not share your password with friends or partners',
      'Do not write passwords on paper stuck to your computer or phone case',
      'Do not approve a login prompt or 2FA request that you did not start',
    ],
  },
  {
    id: 'fake-apps',
    icon: <Download size={22} />,
    color: 'text-warning',
    bgColor: 'bg-warning/5',
    borderColor: 'border-warning/20',
    title: 'Fake Apps & Malicious Files (APKs)',
    subtitle: 'Apps that steal your data, codes, and money',
    warning: 'Files like "Wedding_Invitation.apk" or "M-Pesa_Reversal.apk" sent on WhatsApp are apps, not documents. Installing them can let criminals read your SMS codes and control your phone.',
    dos: [
      { icon: <CheckCircle size={16} />, title: 'Install apps only from official stores', description: 'Use the Google Play Store or Apple App Store. Check the developer name and number of downloads before installing.' },
      { icon: <CheckCircle size={16} />, title: 'Keep "Install unknown apps" turned off', description: 'On Android, go to Settings > Apps > Special app access > Install unknown apps and make sure it is off for WhatsApp, Chrome, and file managers.' },
      { icon: <CheckCircle size={16} />, title: 'Keep Google Play Protect on', description: 'Open Play Store > your profile > Play Protect and make sure scanning is turned on.' },
      { icon: <CheckCircle size={16} />, title: 'Update your phone and apps', description: 'Install system and app updates when they appear. Updates fix security holes that attackers use.' },
    ],
    donts: [
      'Do not open files ending in .apk sent via WhatsApp, SMS, or email',
      'Do not give an app "Accessibility" or "SMS" permission unless you are sure why it needs it',
      'Do not download "modded" or free versions of paid apps from websites',
      'Do not install apps a caller tells you to install to "fix" your account',
    ],
  },
  {
    id: 'id-data',
    icon: <Fingerprint size={22} />,
    color: 'text-info',
    bgColor: 'bg-info/5',
    borderColor: 'border-info/20',
    title: 'Protecting Your ID & Personal Data',
    subtitle: 'Your ID number is a key to your money and identity',
    warning: 'With your ID number and photos, criminals can register SIM cards, take loans, or open accounts in your name.',
    dos: [
      { icon: <CheckCircle size={16} />, title: 'Mark every ID photocopy', description: 'Write across the copy what it is for and the date, e.g. "For ABC Ltd job application only, 01/10/2026". This makes it harder to reuse.' },
      { icon: <CheckCircle size={16} />, title: 'Check SIM cards registered to your ID', description: 'Use your mobile network\'s official service to see which numbers are registered with your ID, and report any you do not recognise.' },
      { icon: <CheckCircle size={16} />, title: 'Know your data rights', description: 'Under the Kenya Data Protection Act, you can ask organisations what data they hold on you and complain to the Office of the Data Protection Commissioner (ODPC) if it is misused.' },
      { icon: <CheckCircle size={16} />, title: 'Report a lost ID quickly', description: 'Get a police abstract and apply for a replacement. Inform your bank and mobile network so they can watch for fraud.' },
    ],
    donts: [
      'Do not post photos of your ID, passport, KRA PIN certificate, or bank cards online',
      'Do not give your ID number to people on the street offering "free" gifts or registrations',
      'Do not leave ID copies at cyber cafes or print shops',
      'Do not share your date of birth and ID number together on social media forms',
    ],
  },
  {
    id: 'harassment',
    icon: <HeartCrack size={22} />,
    color: 'text-error',
    bgColor: 'bg-error/5',
    borderColor: 'border-error/20',
    title: 'Online Harassment, Sextortion & Romance Scams',
    subtitle: 'Protecting yourself and your children from abuse online',
    warning: 'If someone threatens to share private photos unless you pay, you are the victim  -  not the one in trouble. Paying rarely stops the threats.',
    dos: [
      { icon: <CheckCircle size={16} />, title: 'Save the evidence, then block', description: 'Screenshot messages, profiles, and payment requests. Then block and report the account on the platform.' },
      { icon: <CheckCircle size={16} />, title: 'Talk to someone you trust', description: 'Tell a friend, family member, or counsellor. You do not have to deal with this alone. Report threats to the police or DCI.' },
      { icon: <CheckCircle size={16} />, title: 'Be careful with online-only relationships', description: 'If someone you have never met in person asks for money, crypto investment, or private photos, it is very likely a scam.' },
      { icon: <CheckCircle size={16} />, title: 'Protect children online', description: 'Talk openly with children about who they chat with, use parental controls, and teach them to tell you if anyone asks for photos or secrets.' },
    ],
    donts: [
      'Do not pay blackmailers  -  they usually ask for more',
      'Do not send money to someone you only know online',
      'Do not share intimate photos or videos with anyone online',
      'Do not delete evidence before reporting',
    ],
  },
];

const scamExamples = [
  {
    channel: 'SMS',
    message: 'Ksh 2,500 imetumwa kwa namba yako kimakosa. Tafadhali rudisha kwa 07XX XXX XXX. Mungu akubariki.',
    signs: ['Real M-Pesa messages come from "MPESA", not a personal number', 'Pressure to send money back quickly', 'Check your balance with *334# first'],
  },
  {
    channel: 'SMS',
    message: 'CONGRATULATIONS! You have won Ksh 50,000 in the Safaricom promotion. Send Ksh 500 registration fee to claim.',
    signs: ['You never entered a competition', 'Real prizes never require a fee', 'Sent from an ordinary phone number'],
  },
  {
    channel: 'WhatsApp',
    message: 'Hi, sorry I sent a 6-digit code to your number by mistake. Can you please forward it to me?',
    signs: ['That code is your WhatsApp login code', 'Even if it is from a friend, their account may be hacked', 'Never share verification codes'],
  },
  {
    channel: 'Telegram',
    message: 'Earn Ksh 3,000-8,000 daily working from home! Just like YouTube videos. Deposit Ksh 1,000 to activate your account.',
    signs: ['Paying to start a job', 'Unrealistic earnings for simple tasks', 'Recruited through a chat app'],
  },
];

const quizQuestions = [
  { question: 'A caller says they are from Safaricom and need the OTP sent to your phone to "secure your account".', isScam: true, explanation: 'Safaricom will never ask for your OTP or PIN. Hang up and call 100 yourself.' },
  { question: 'You get an M-Pesa message from "MPESA" confirming a payment you just made at a shop, with the correct shop name.', isScam: false, explanation: 'This matches what you did, comes from the official sender, and shows the right business name.' },
  { question: 'An agency offers you a cleaning job in Dubai and asks for Ksh 15,000 for "visa processing" before an interview.', isScam: true, explanation: 'Upfront fees before any interview are a major warning sign. Verify agencies with the National Employment Authority.' },
  { question: 'A friend sends a file called "Harusi_Invitation.apk" on WhatsApp.', isScam: true, explanation: 'Invitations are not .apk files. This is likely malware that can read your messages and codes.' },
  { question: 'Google sends a security alert email about a new login after you just signed in on a new phone.', isScam: false, explanation: 'This matches something you did. Still, check alerts by opening your Google account directly, not through email links.' },
];

const hackedSteps = [
  { title: 'Stay calm and act fast', description: 'The sooner you act, the less damage criminals can do.' },
  { title: 'Secure your email first', description: 'Change your email password from a safe device. Your email is the key to resetting everything else.' },
  { title: 'Change passwords and log out all sessions', description: 'Change passwords for affected accounts and use "Log out of all devices" in each account\'s security settings.' },
  { title: 'Turn on two-factor authentication', description: 'Enable 2FA on every account you recover so the attacker cannot get back in.' },
  { title: 'Call your mobile network and bank', description: 'If money or your SIM is involved, call Safaricom (100), Airtel, or your bank to freeze or block transactions.' },
  { title: 'Warn your contacts', description: 'Tell friends and family not to send money or codes to your accounts until you confirm they are safe.' },
  { title: 'Report it', description: 'Report to the platform, your provider, and the police or DCI. Keep screenshots and transaction messages as evidence.' },
];

export const CyberAwareness: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>('phone-theft');
  const [copied, setCopied] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, boolean>>({});

  const quizScore = quizQuestions.filter((q, i) => quizAnswers[i] === q.isScam).length;
  const quizDone = Object.keys(quizAnswers).length === quizQuestions.length;

  const copyPage = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="fade-in p-4 sm:p-6 overflow-y-auto h-full scrollbar-thin max-w-4xl mx-auto" aria-label="Cybersecurity safety guide">

      {/* Hero */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-base-content/40 uppercase tracking-widest mb-3">
          <ShieldAlert size={12} /> Community Security Awareness
        </div>
        <h1 className="text-3xl font-bold text-base-content mb-3 leading-tight">
          Protect Yourself <span className="text-success font-mono cyber-glow">Online and Offline</span>
        </h1>
        <p className="text-base-content/60 text-base leading-relaxed">
          You do not need to be a tech expert to stay safer. Use this quick guide to protect your
          phone, money, accounts, and personal information in everyday situations.
        </p>
      </div>

      {/* Alert banner */}
      <div className="alert bg-warning/10 border border-warning/30 mb-8">
        <AlertTriangle size={18} className="text-warning shrink-0" />
        <div>
          <p className="text-sm font-semibold text-base-content">Real threats, real people</p>
          <p className="text-xs text-base-content/60 mt-0.5">
            If something feels urgent, unexpected, or asks for a secret code, pause and verify it through an official channel.
          </p>
        </div>
      </div>

      {/* Threat sections */}
      <div className="space-y-3 mb-8">
        {sections.map(section => {
          const isOpen = openSection === section.id;
          return (
            <div
              key={section.id}
              className={`card border ${section.borderColor} ${isOpen ? section.bgColor : 'bg-base-200'} transition-colors`}
            >
              {/* Section header */}
              <button
                type="button"
                className="card-body p-4 w-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-success/60 rounded-[inherit]"
                onClick={() => setOpenSection(isOpen ? null : section.id)}
                aria-expanded={isOpen}
                aria-controls={`${section.id}-content`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className={section.color}>{section.icon}</span>
                    <div>
                      <p className={`font-semibold text-sm text-base-content`}>{section.title}</p>
                      <p className="text-xs text-base-content/50">{section.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-base-content/30 shrink-0">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </span>
                </div>

                {/* Warning line */}
                {isOpen && (
                  <div className="flex items-start gap-2 mt-3 p-3 rounded-lg bg-base-300">
                    <Info size={14} className={`${section.color} shrink-0 mt-0.5`} />
                    <p className="text-xs text-base-content/70 leading-relaxed">{section.warning}</p>
                  </div>
                )}
              </button>

              {/* Expanded content */}
              {isOpen && (
                <div id={`${section.id}-content`} className="px-4 pb-4 space-y-4">

                  {/* Do's */}
                  <div>
                    <p className="text-xs font-bold text-success uppercase tracking-widest mb-2 flex items-center gap-1">
                      <CheckCircle size={12} /> What to do
                    </p>
                    <div className="space-y-2">
                      {section.dos.map((tip, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-base-300">
                          <span className="text-success shrink-0 mt-0.5">{tip.icon}</span>
                          <div>
                            <p className="text-sm font-semibold text-base-content">{tip.title}</p>
                            <p className="text-xs text-base-content/60 mt-0.5 leading-relaxed">{tip.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Don'ts */}
                  <div>
                    <p className="text-xs font-bold text-error uppercase tracking-widest mb-2 flex items-center gap-1">
                      <XCircle size={12} /> What NOT to do
                    </p>
                    <div className="space-y-2">
                      {section.donts.map((dont, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-base-300">
                          <XCircle size={14} className="text-error shrink-0 mt-0.5" />
                          <p className="text-xs text-base-content/70 leading-relaxed">{dont}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Real scam examples */}
      <div className="card bg-base-200 border border-base-300 mb-8">
        <div className="card-body p-5">
          <h2 className="text-base font-semibold text-base-content flex items-center gap-2">
            <MessageSquareWarning size={16} className="text-warning" /> Real scam messages to watch for
          </h2>
          <p className="text-xs text-base-content/50 mb-3">
            These are examples of the kind of messages scammers send. Learn the warning signs.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {scamExamples.map((example, i) => (
              <div key={i} className="p-3 rounded-lg bg-base-300 space-y-2">
                <span className="badge badge-sm badge-warning badge-outline">{example.channel}</span>
                <p className="text-xs font-mono text-base-content/80 leading-relaxed p-2 rounded bg-base-100 border-l-2 border-warning">
                  {example.message}
                </p>
                <ul className="space-y-1">
                  {example.signs.map(sign => (
                    <li key={sign} className="flex items-start gap-1.5 text-xs text-base-content/60">
                      <AlertTriangle size={12} className="text-error shrink-0 mt-0.5" /> {sign}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spot the scam quiz */}
      <div className="card bg-base-200 border border-base-300 mb-8">
        <div className="card-body p-5">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <h2 className="text-base font-semibold text-base-content flex items-center gap-2">
                <HelpCircle size={16} className="text-info" /> Spot the scam
              </h2>
              <p className="text-xs text-base-content/50 mt-1">Is it a scam or safe? Test yourself.</p>
            </div>
            {Object.keys(quizAnswers).length > 0 && (
              <button type="button" className="btn btn-xs btn-ghost gap-1" onClick={() => setQuizAnswers({})}>
                <RotateCcw size={12} /> Reset
              </button>
            )}
          </div>
          <div className="space-y-3">
            {quizQuestions.map((q, i) => {
              const answered = i in quizAnswers;
              const correct = quizAnswers[i] === q.isScam;
              return (
                <div key={i} className="p-3 rounded-lg bg-base-300">
                  <p className="text-sm text-base-content mb-2">{q.question}</p>
                  {!answered ? (
                    <div className="flex gap-2">
                      <button type="button" className="btn btn-xs btn-error btn-outline" onClick={() => setQuizAnswers(a => ({ ...a, [i]: true }))}>
                        Scam
                      </button>
                      <button type="button" className="btn btn-xs btn-success btn-outline" onClick={() => setQuizAnswers(a => ({ ...a, [i]: false }))}>
                        Safe
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-start gap-2 text-xs" aria-live="polite">
                      {correct
                        ? <CheckCircle size={14} className="text-success shrink-0 mt-0.5" />
                        : <XCircle size={14} className="text-error shrink-0 mt-0.5" />}
                      <p className="text-base-content/70 leading-relaxed">
                        <strong className={correct ? 'text-success' : 'text-error'}>
                          {correct ? 'Correct!' : 'Not quite.'} It is {q.isScam ? 'a scam' : 'safe'}.
                        </strong>{' '}
                        {q.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {quizDone && (
            <div className="mt-3 p-3 rounded-lg border border-success/20 bg-success/5 text-sm text-base-content flex items-center gap-2">
              <Lightbulb size={16} className="text-success shrink-0" />
              You scored {quizScore} / {quizQuestions.length}. Share this page so others can test themselves too.
            </div>
          )}
        </div>
      </div>

      {/* Hacked recovery */}
      <div className="card bg-base-200 border border-error/20 mb-8">
        <div className="card-body p-5">
          <h2 className="text-base font-semibold text-base-content flex items-center gap-2">
            <RotateCcw size={16} className="text-error" /> I've been hacked or scammed  -  what now?
          </h2>
          <p className="text-xs text-base-content/50 mb-3">Follow these steps in order.</p>
          <ol className="space-y-2">
            {hackedSteps.map((step, i) => (
              <li key={step.title} className="flex items-start gap-3 p-3 rounded-lg bg-base-300">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-error/15 text-error text-xs font-bold font-mono shrink-0">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-base-content">{step.title}</p>
                  <p className="text-xs text-base-content/60 mt-0.5 leading-relaxed">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Emergency contacts */}
      <div className="card bg-base-200 border border-base-300 mb-8">
        <div className="card-body p-5">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h2 className="text-base font-semibold text-base-content flex items-center gap-2">
                <AlertTriangle size={16} className="text-error" /> If something goes wrong
              </h2>
              <p className="text-xs text-base-content/50 mt-1">
                Act quickly, but use official channels. Never give a caller your PIN, password, or OTP to “fix” the problem.
              </p>
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              { label: 'Safaricom Customer Care', number: '100', desc: 'Prepaid support; verify SIM, M-Pesa, and account issues' },
              { label: 'Airtel Customer Care', number: '0800 724 000', desc: 'Contact Airtel through its official customer-care channels' },
              { label: 'DCI Fichua', number: '0800 722 203', desc: 'Report crime to the Directorate of Criminal Investigations' },
              { label: 'Emergency police', number: '999 / 112 / 911', desc: 'For immediate emergencies or danger' },
            ].map((contact, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-base-300 gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-base-content">{contact.label}</p>
                  <p className="text-xs text-base-content/50 leading-relaxed">{contact.desc}</p>
                </div>
                <a
                  href={`tel:${contact.number.replace(/\s/g, '').replace(/\//g, ',')}`}
                  className="btn btn-sm btn-success font-mono shrink-0"
                  aria-label={`Call ${contact.label} at ${contact.number}`}
                >
                  <Phone size={13} /> {contact.number}
                </a>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-lg border border-info/20 bg-info/5 text-xs text-base-content/60 leading-relaxed">
            <strong className="text-base-content">Important:</strong> Contact details can change. Before publishing or relying on a number, verify it from the organisation's official website or app.
          </div>
        </div>
      </div>

      {/* Security checklist */}
      <div className="card bg-base-200 border border-base-300 mb-8">
        <div className="card-body p-5">
          <h2 className="text-base font-semibold text-base-content mb-3 flex items-center gap-2">
            <LockKeyhole size={16} className="text-success" /> 60-second security check
          </h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              'Screen lock is enabled',
              'Important accounts use unique passwords',
              'Two-factor authentication is enabled where available',
              'Your recovery email/phone is current',
              'You know how to lock or locate your phone',
              'You never share PINs, passwords, or OTPs',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 p-2.5 rounded-lg bg-base-300 text-xs text-base-content/70">
                <CheckCircle size={14} className="text-success shrink-0" /> {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Share prompt */}
      <div className="card bg-success/5 border border-success/20">
        <div className="card-body p-5 text-center">
          <Share2 size={20} className="text-success mx-auto mb-2" />
          <p className="text-sm font-semibold text-base-content mb-1">Share the safety guide</p>
          <p className="text-xs text-base-content/50 max-w-xl mx-auto mb-4">
            Pass these practical checks to family, friends, neighbours, and anyone who uses a phone or mobile money.
          </p>
          <button type="button" onClick={copyPage} className="btn btn-sm btn-success gap-2" aria-live="polite">
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? 'Link copied' : 'Copy page link'}
          </button>
        </div>
      </div>

    </div>
  );
};
