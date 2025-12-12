
const modelsData = [
  { 
    id: 'adri', 
    name: 'Adri', 
    age: 22, 
    height: '1.68m', 
    category: 'Premium', 
    location: 'Cachoeirinha', 
    coverImage: 'img/adri.jpg', 
    gallery: ['img/adri2.jpg', 'img/adri3.jpg'], 
    description: 'Beleza estonteante e personalidade marcante. Adri é a companhia perfeita para quem busca intensidade e carisma.',
    services: { presencial: true, online: true }
  },
  { 
    id: 'angel', 
    name: 'Angel', 
    age: 24, 
    height: '1.70m', 
    category: 'VIP', 
    location: 'Florianópolis', 
    coverImage: 'img/angel.jpg', 
    gallery: ['img/angel2.jpg', 'img/angel3.jpg', 'img/angel4.jpg'], 
    description: 'Angel faz jus ao nome com seu rosto angelical e corpo escultural. Elegante e sofisticada para eventos e jantares.',
    services: { presencial: true, online: false }
  },
  { 
    id: 'maiara', 
    name: 'Maiara', 
    age: 25, 
    height: '1.75m', 
    category: 'Luxo', 
    location: 'Serra Gaúcha', 
    coverImage: 'img/maiara.jpg', 
    gallery: ['img/maiara2.jpg', 'img/maiara26erechin.jpg'], 
    description: 'Disponível na Serra Gaúcha, Maiara encanta com sua elegância natural e conversa envolvente. Perfeita para o clima romântico da serra.',
    services: { presencial: true, online: true }
  },
  { 
    id: 'Yasmin', 
    name: 'Yasmin', 
    age: 21, 
    height: '1.65m', 
    category: 'Iniciante', 
    location: 'Torres', 
    coverImage: 'img/bianca.jpg', 
    gallery: ['img/yasmin2.jpg', 'img/yasmin3.jpg'], 
    description: 'Doce e divertida, Bianca traz leveza e prazer para seus encontros. Uma revelação em Torres.',
    services: { presencial: true, online: true }
  },
  { 
    id: 'Thais', 
    name: 'Thais', 
    age: 23, 
    height: '1.72m', 
    category: 'Mignon', 
    location: 'Cachoeirinha', 
    coverImage: 'img/thais.jpg', 
    gallery: ['img/thais2.jpg', 'img/thais3.jpg'], 
    description: 'Tessa possui um olhar magnético e um corpo desenhado. Adora festas e socializar.',
    services: { presencial: true, online: false }
  },
  // Novas Modelos para Regiões (Placeholders para teste)
  { 
    id: 'Sabrina', 
    name: 'Sabrina', 
    age: 26, 
    height: '1.71m', 
    category: 'Luxo', 
    location: 'Serra Gaúcha', 
    coverImage: 'img/sabrina.jpg', 
    gallery: ['img/sabrina2.jpg'], 
    description: 'Sabrina é conhecida por seu bom humor e elegância. Uma companhia indispensável para quem visita Cachoeirinha.',
    services: { presencial: true, online: false }
  },
  { 
    id: 'Maiara', 
    name: 'Maiara', 
    age: 22, 
    height: '1.67m', 
    category: 'Iniciante', 
    location: 'Serra Gaúcha', 
    coverImage: 'img/maiara2.jpg', 
    gallery: ['img/maiara.jpg'], 
    description: 'Com um sorriso encantador, Fernanda traz o calor humano para o frio da Serra. Carinhosa e atenciosa.',
    services: { presencial: true, online: true }
  },
  { 
    id: 'camila', 
    name: 'Camila', 
    age: 24, 
    height: '1.69m', 
    category: 'VIP', 
    location: 'Torres', 
    coverImage: 'img/thais.jpg', 
    gallery: ['img/thais2.jpg'], 
    description: 'Camila é a musa do verão em Torres. Bronzeada, atlética e cheia de energia.',
    services: { presencial: true, online: false }
  },
  { 
    id: 'larissa', 
    name: 'Larissa', 
    age: 21, 
    height: '1.75m', 
    category: 'Model', 
    location: 'Florianópolis', 
    coverImage: 'img/angel3.jpg', 
    gallery: ['img/angel.jpg'], 
    description: 'Larissa impressiona por sua altura e porte de modelo. Ideal para eventos de alto padrão em Floripa.',
    services: { presencial: true, online: true }
  },
  { 
    id: 'patricia', 
    name: 'Patrícia', 
    age: 28, 
    height: '1.65m', 
    category: 'Premium', 
    location: 'Florianópolis', 
    coverImage: 'img/angel4.jpg', 
    gallery: ['img/angel2.jpg'], 
    description: 'Experiente e sedutora, Patrícia sabe exatamente como satisfazer os desejos mais ocultos.',
    services: { presencial: true, online: true }
  }
];

const boatesData = [
  { 
    id: '1', 
    name: 'Sweet Pepper', 
    location: 'Uruguaiana', 
    image: 'img/sweet.jpg', 
    // Usando iframe de busca para o endereço específico
    mapEmbed: 'https://maps.google.com/maps?q=Rua+Perimetral+Leste,709,Aduaneiro,Uruguaiana,RS&t=&z=15&ie=UTF8&iwloc=&output=embed',
    address: 'Rua Perimetral Leste, 709 – Aduaneiro – Uruguaiana/RS',
    description: 'A Sweet Pepper é referência em entretenimento na fronteira. Ambiente climatizado, segurança especializada e total discrição para seus momentos de lazer.',
    offerings: 'Bar completo, música ambiente, quartos privativos.',
    amenities: [
        'Wi-Fi Gratuito',
        'Quartos Confortáveis',
        'Segurança 24h',
        'Ambiente Climatizado',
        'Bar Executivo'
    ],
    whatsapp: '55997190424'
  },
  { 
    id: '2', 
    name: 'Dama da Noite', 
    location: 'Cachoeira do Sul', 
    image: 'img/dama da noite.png', 
    // Usando iframe de busca para o endereço específico
    mapEmbed: 'https://maps.google.com/maps?q=Rua+Ivo+Becker,1117,Santa+Helena,Cachoeira+do+Sul,RS&t=&z=15&ie=UTF8&iwloc=&output=embed',
    address: 'R. Ivo Becker, 1117 - Santa Helena, Cachoeira do Sul - RS',
    description: 'Tradicional e sofisticada, a Dama da Noite oferece uma experiência exclusiva em Cachoeira do Sul. O local perfeito para quem busca relaxar com classe.',
    offerings: 'Drinks variados, atendimento VIP.',
    amenities: [
        'Estacionamento Discreto',
        'Suítes Temáticas',
        'Serviço de Bar',
        'TV a Cabo',
        'Wi-Fi'
    ],
    whatsapp: '51996605771'
  },
  { 
    id: '3', 
    name: 'Red Room', 
    location: 'Porto Alegre', 
    image: 'https://picsum.photos/seed/club3/600/400', 
    mapEmbed: 'https://maps.google.com/maps?q=Rua+Padre+Chagas,Moinhos+de+Vento,Porto+Alegre,RS&t=&z=15&ie=UTF8&iwloc=&output=embed',
    address: 'Rua Padre Chagas, Moinhos de Vento',
    description: 'Um ambiente sensual e provocante. O Red Room possui cabines privativas com isolamento acústico.',
    offerings: 'Serviço de quarto, shows burlescos.',
    amenities: [
        'Wi-Fi Gratuito',
        'Café da Manhã e Janta',
        'Quartos Refrigerados c/ Armários',
        'Televisão Coletiva',
        'Lavanderia'
    ]
  }
];

// Agency Modal Data
const agencyData = {
    desc: "Localizada no coração de Cachoeira do Sul, nossa sede oferece total discrição e segurança. Dispomos de lounge privativo, bar executivo e suítes temáticas de alto padrão com isolamento acústico. O acesso é feito por entrada reservada, garantindo o anonimato de nossos clientes.",
    photos: [
        
        'img/casa2.jfif',
        'img/casa3.jfif',
        'img/casa4.jfif',
        'img/casa5.jfif'
    ]
};
