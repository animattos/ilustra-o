const baseIllustrations = [
    { src: './01.png', description: 'Esboço a lápis com linhas feitas à mão simulando grafite.', price: 68 },
    { src: './02.png', description: ' Ilustração com contornos limpos, expressivos e bem definidos.', price: 68 },
    { src: './03.png', description: 'Ilustração digital colorida com textura manual imitando pinceladas.', price: 87 },
    { src: './04.png', description: 'Ilustração estilo 3D mais infantil e acabamento limpo.', price: 96 },
    { src: './05.png', description: 'Ilustração voltada para infantojuvenil mais realista.', price: 87 },
    { src: './06.png', description: 'Ilustração aquarelada para estilo mais delicado.', price: 75 },
    { src: './07.png', description: 'Ilustração com contorno deixando mais atraente.', price: 87 },
    { src: './08.png', description: 'ustração estilo vetorial limpo e mais sólido.', price: 75 },
];

const additionalModalImagesForFirstIllustration = [
    { src: './01A.png', description: 'A professora repreende o menino Juca.' },
    { src: './01B.png', description: 'O menino Juca estava voando entre as nuvens' },
    { src: './01C.png', description: 'O cão e o gato assistiam o pôr do sol.' },
    { src: './01D.png', description: 'Juca ensinava sobre a internet para a lagartinha.' },
    { src: './01E.png', description: 'A abelhinha era muito produtiva.' },
    { src: './01F.png', description: 'A fazendeira gostava muito de sua fazenda. ' },
    { src: './01G.png', description: 'O cachoro skatista muito engraçado.' },
];

const additionalModalImagesForSecondIllustration = [
  { src: './02A.png', description: 'O menino sonhava ser um astronauta.' },
  { src: './02B.png', description: 'Diversão e brincadeira em família.' },
  { src: './02C.png', description: 'O fazendeiro passeava com o seu burrinho.' },
  { src: './02D.png', description: 'O gatinho sapeca fugia do cão feroz.' },
  { src: './02E.png', description: 'O menino descia muito rápido de bicicleta.' },
  
];

const additionalModalImagesForThirdIllustration = [
  { src: './03A.png', description: 'O menino brincava com o seu cãozinho.' },
  { src: './03B.png', description: 'O menino correu daquele touro feroz.' },
  { src: './03C.png', description: 'Ele abraçou sua mãezinha feliz.' },
  { src: './03D.png', description: 'Isso que chamo de manobra radical.' },
  { src: './03E.png', description: 'Ele não tinha dinheiro para comprar picolé.' },
  { src: './03F.png', description: 'O cachorrinho dormia o dia todo' },
  { src: './03G.png', description: 'Ele cantava dirigindo seu caminhão.' },
  { src: './03H.png', description: 'Essa era a dança do pinguim feliz.' },
  { src: './03I.png', description: 'Você conhece a história desse gato?.' },
  { src: './03J.png', description: 'Ele se escondia nas latas de lixo.' },
  { src: './03L.png', description: 'O espertalhão sabia como convencer.' },
  { src: './03M.png', description: 'O gatinho passeava pelo campo.' },
  { src: './03N.png', description: 'Lucas gostava de sentir o vento.' },
  { src: './03O.png', description: 'Nesse dia ele viu algo no céu.' },
  { src: './03P.png', description: 'O sol te aquecia todos os dias' },
  { src: './03Q.png', description: 'O seu pai é um super herói?' },
];

const additionalModalImagesForFourthIllustration = [
  { src: './04A.png', description: 'Menina empinando pipa com o seu cãozinho.' },
  { src: './04B.png', description: 'O menino conversava com o sirizinho.' },
  { src: './04C.png', description: 'Ela abraçava seu gatinho chato.' },
  { src: './04D.png', description: 'O feirante vendia muito naquele dia.' },
  { src: './04E.png', description: 'Ele corria em volta da fazendinha.' },
  { src: './04F.png', description: 'Eles estavam com medo de cair da bike.' },
  { src: './04G.png', description: 'Ele se vestia de super-herói e fazia o bem.' },
  { src: './04H.png', description: 'Eles passavam o dia juntos lendo livro.' },
 
];
const additionalModalImagesForFifthIllustration = [
  { src: './05A.png', description: 'Jovem andava de skate pelas vias perigozamente.' },
  { src: './05B.png', description: 'O carteiro foi atacado pelos cães.' },
  { src: './05C.png', description: 'Ele pedia esmolas para sobreviver.' },
  { src: './05D.png', description: 'O dinossauro atacou o seu carro.' },
  { src: './05E.png', description: 'Ele ia todas manhãs pescar no lago.' },
  { src: './05F.png', description: 'Ela chorava sempre que se lembrava disso.' },
  { src: './05G.png', description: 'Os zumbis o atacaram em bando.' },
  { src: './05H.png', description: 'Joãozinho foi visto pelo gigante.' },
  { src: './05I.png', description: 'Tudo parecia enorme diante dele.' },
  { src: './05J.png', description: 'Ele tinha asas e podia voar.' },  
 
];

const additionalModalImagesForSixthIllustration = [
  { src: './06A.png', description: 'O cozinheiro dava um show na cozinha.' },
  { src: './06B.png', description: 'O menino arqueiro estava treinando.' },
  { src: './06C.png', description: 'Ele brincava com a sua tartaruguinha.' },
  { src: './06D.png', description: 'Era noite de lua cheia.' },
  { src: './06E.png', description: 'Juca tinha muita imaginação.' },
  { src: './06F.png', description: 'Ela comprou um sorvete.' },
  { src: './06G.png', description: 'O urso regava as plantas todo dia.' },
 
];
const additionalModalImagesForSeventhIllustration = [
  { src: './07A.png', description: 'Jesus afastava o perigo salvando sua ovelha.' },
  { src: './07B.png', description: 'O menino se divertia com o seu papai.' },
  { src: './07C.png', description: 'Ele finalmente chegou ao topo.' },
  { src: './07D.png', description: 'Ela se despedia de seu filho.' },
  { src: './07E.png', description: 'Juca gostava de trepar em árvores.' },
  { src: './07F.png', description: 'O rei se assustou com o dragão.' },
  { src: './07G.png', description: 'Eles gostavam de caminhar pela rua.' },
  { src: './07H.png', description: 'Joãozinho ficava sempre no celular' },
  { src: './07I.png', description: 'O pescador conversava com a baleia' },
  { src: './07J.png', description: 'O gnomo da riqueza se distraia' }, 
  { src: './07L.png', description: 'O Jacaré que gostava de dançar' }, 
  { src: './07M.png', description: 'Ele vivia distraído com o celular' },
  { src: './07N.png', description: 'A menina fazia compras sozinha' }, 
  { src: './07O.png', description: 'Juliete passava horas balançando' }, 
    { src: './07P.png', description: 'O rei se assustou com o dragão.' },
  { src: './07Q.png', description: 'Eles gostavam de caminhar pela rua.' },
  { src: './07R.png', description: 'Joãozinho ficava sempre no celular' },
  { src: './07S.png', description: 'O pescador conversava com a baleia' },
  { src: './07T.png', description: 'O gnomo da riqueza se distraia' }, 
  { src: './07U.png', description: 'O Jacaré que gostava de dançar' }, 
  { src: './07V.png', description: 'Ele vivia distraído com o celular' },
  { src: './07X.png', description: 'A menina fazia compras sozinha' }, 
  { src: './07Z.png', description: 'Juliete passava horas balançando' }, 
 
];
const additionalModalImagesForEighthIllustration = [
  { src: './08A.png', description: 'Ela percebeu que estava sendo seguida.' },
  { src: './08B.png', description: 'O pirata alegre e que gostava de dançar.' },
  { src: './08C.png', description: 'A princesa beijou o dapo gosmento.' },
  { src: './08D.png', description: 'A rainha da selva em ação.' },
  { src: './08E.png', description: 'O leão demonstrando bravura.' },
  { src: './08F.png', description: 'Ele tentava conquistá-la sempre.' },
  { src: './08G.png', description: 'O barão queria pagar a sua conta.' },
  { src: './08H.png', description: 'A sua fantasia ficou linda.' },
  { src: './08I.png', description: 'Esse bebê gostava de livros.' },
  { src: './08J.png', description: 'E jesus apareceu sobre as águas.' }, 
  { src: './08L.png', description: 'Ela gostava de cozinhar o dia todo.' }, 
 
];


const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const closeButton = document.querySelector('.close-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

const quantitySlider = document.getElementById('quantity-slider');
const currentQuantitySpan = document.getElementById('current-quantity');
const totalPriceSpan = document.getElementById('total-price');

const optionTextLayout = document.getElementById('option-text-layout');
const optionCoverDesign = document.getElementById('option-cover-design');
const optionBookTrailer = document.getElementById('option-book-trailer');
const optionTranslation = document.getElementById('option-translation');
const optionAttractiveText = document.getElementById('option-attractive-text');

const optionCashDiscount = document.getElementById('option-cash-discount');
const optionFiftyFifty = document.getElementById('option-fifty-fifty');

const generateQrcodeButton = document.getElementById('generate-qrcode-button');
const qrModal = document.getElementById('qr-modal');
const qrModalClose = document.querySelector('.qr-close-button');
const qrcodeDiv = document.getElementById('qrcode');
const qrModalMessage = document.getElementById('qr-modal-message');

const downloadQrButton = document.getElementById('download-qr-button');
const copyPixButton = document.getElementById('copy-pix-button');

// New service details modal elements
const serviceDetailsModal = document.getElementById('service-details-modal');
const serviceDetailsCloseButton = document.querySelector('.service-details-close-button');
const serviceDetailsTitle = document.getElementById('service-details-title');
const serviceDetailsDescription = document.getElementById('service-details-description');
const infoButtons = document.querySelectorAll('.info-button');


const TEXT_LAYOUT_PRICE_PER_ILLUSTRATION = 30;
const COVER_DESIGN_PRICE = 250;
const BOOK_TRAILER_PRICE = 280; 
const TRANSLATION_PRICE_PER_ILLUSTRATION = 35;
const ATTRACTIVE_TEXT_PRICE = 350;

const DISPLAY_QUANTITY = 8; 

let currentModalIndex = 0;
let currentModalImages = [];

// New: Detailed descriptions for services
const serviceDetails = {
    'text-layout': {
        title: 'Texto e Diagramação',
        description: 'Este serviço inclui a organização e formatação do texto do seu livro para que ele se harmonize perfeitamente com as ilustrações. Garante uma leitura fluida e um design profissional, adaptando o layout para e-books ou impressão.'
    },
    'cover-design': {
        title: 'Design de Capa',
        description: 'A criação de uma capa impactante e profissional que capture a essência do seu livro e atraia o público-alvo. O design será exclusivo, utilizando elementos visuais que se conectam com a história e o estilo das ilustrações internas.'
    },
    'book-trailer': {
        title: 'Book Trailer',
        description: 'Um vídeo promocional dinâmico e envolvente para seu livro. Inclui animações, trilha sonora, e narração (se desejado), criando uma prévia que desperta o interesse e convida os leitores a mergulharem na sua história.'
    },
    'translation': {
        title: 'Traduções para Outras Línguas',
        description: 'Oferecemos tradução profissional do texto do seu livro para diversos idiomas, permitindo que sua obra alcance um público global. As traduções são feitas por nativos e revisadas para garantir precisão e fidelidade ao original.'
    },
    'attractive-text': {
        title: 'Deixar Texto Mais Atraente',
        description: 'Este serviço visa aprimorar a clareza, o ritmo e o impacto do seu texto. Inclui revisão de estilo, sugestões de reescrita e otimização de frases para tornar a leitura mais cativante e envolvente para o seu público.'
    }
};

// --- Provided Pix generation script ---
const chavePix = "estudioanimattos@gmail.com";
const nomeRecebedor = "Alessandro Mattos";
const cidadeRecebedor = "Sao Paulo"; 

function calculateCRC16(str) {
  let crc = 0xFFFF;
  let polynomial = 0x1021; 

  for (let i = 0; i < str.length; i++) {
    let byte = str.charCodeAt(i) & 0xFF;
    crc ^= byte << 8;
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = ((crc << 1) ^ polynomial) & 0xFFFF;
      } else {
        crc = (crc << 1) & 0xFFFF;
      }
    }
  }

  crc &= 0xFFFF;
  const hex = crc.toString(16).toUpperCase().padStart(4, '0');
  return hex;
}

function generatePixData(valor) {
  const valorFormatado = valor.toFixed(2);
  const idTx = "***"; 

  // Helper to format TLV (Tag, Length, Value)
  const formatTLV = (tag, value) => {
      const len = value.length;
      const lenStr = len.toString().padStart(2, '0');
      return `${tag}${lenStr}${value}`;
  };

  // Payload format indicator (ID 00) - Must be '01'
  const payloadFormatIndicator = formatTLV('00', '01');

  // Point of Initiation Method (ID 01) - '11' for static QR, '12' for dynamic
   const pointOfInitiation = formatTLV('01', '11');


  // Merchant account information (ID 26)
  let merchantAccount = formatTLV('00', 'BR.GOV.BCB.PIX'); 
  merchantAccount += formatTLV('01', chavePix); 
  const merchantAccountInformation = formatTLV('26', merchantAccount);


  // Merchant category code (ID 52) - Using 0000 for no MCC provided
  const merchantCategoryCode = formatTLV('52', '0000');

  // Transaction currency (ID 53) - 986 for BRL
  const transactionCurrency = formatTLV('53', '986');

  // Transaction amount (ID 54)
  const transactionAmount = formatTLV('54', valorFormatado);

  // Country code (ID 58) - BR for Brazil
  const countryCode = formatTLV('58', 'BR');

  // Merchant name (ID 59)
  const merchantName = formatTLV('59', nomeRecebedor);

  // Merchant city (ID 60)
  const merchantCity = formatTLV('60', cidadeRecebedor);

  // Additional Data Field Template (ID 62) - Optional but recommended for Transaction ID
  let additionalData = formatTLV('05', idTx); 
  const additionalDataFieldTemplate = formatTLV('62', additionalData);


  // Concatenate the components *before* the CRC tag
  let pixCodeDataWithoutCRC = payloadFormatIndicator + pointOfInitiation + merchantAccountInformation + merchantCategoryCode + transactionCurrency + transactionAmount + countryCode + merchantName + merchantCity + additionalDataFieldTemplate;

  // CRC16-CCITT tag (ID 63) - This must be the LAST field's tag, *before* calculating the CRC
  let crc16Tag = "6304"; 

  // Calculate CRC on the payload string *including* the '6304' tag
  const payloadForCRC = pixCodeDataWithoutCRC + crc16Tag;
  const calculatedCrc16 = calculateCRC16(payloadForCRC);

  // Append the CRC tag and the calculated CRC value
  const pixCode = payloadForCRC + calculatedCrc16;

  return pixCode;
}
// --- End of provided Pix generation script ---


function createGalleryItem(illustration, index) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('gallery-item');
    itemDiv.dataset.index = index;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const img = document.createElement('img');
    img.src = illustration.src;
    img.alt = 'Thumbnail: ' + illustration.description;

    imageContainer.appendChild(img);

    const infoRow = document.createElement('div');
    infoRow.classList.add('info-row');

    const priceDisplay = document.createElement('div');
    priceDisplay.classList.add('illustration-price');
    priceDisplay.textContent = `R$ ${illustration.price.toFixed(2)}`;

    const checkboxContainer = document.createElement('div');
    checkboxContainer.classList.add('illustration-checkbox');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `illustration-${index}`;
    checkbox.checked = false;
    const label = document.createElement('label');
    label.htmlFor = `illustration-${index}`;
    label.textContent = 'Incluir';

    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(label);

    infoRow.appendChild(priceDisplay);
    infoRow.appendChild(checkboxContainer);

    itemDiv.appendChild(imageContainer);
    itemDiv.appendChild(infoRow);

    itemDiv.addEventListener('click', (event) => {
         if (!checkboxContainer.contains(event.target)) {
             openModal(index);
        }
    });


    checkbox.addEventListener('change', function() {
        handleCheckboxChange(this);
        updateCalculationDisplay();
    });

    checkboxContainer.addEventListener('click', (event) => {
         if (event.target !== checkbox) {
             checkbox.checked = !checkbox.checked;
             handleCheckboxChange(checkbox);
             updateCalculationDisplay();
         }
    });


    return itemDiv;
}

function handleCheckboxChange(changedCheckbox) {
    const checkboxes = gallery.querySelectorAll('.illustration-checkbox input[type="checkbox"]');

    if (changedCheckbox.checked) {
        checkboxes.forEach(checkbox => {
            if (checkbox !== changedCheckbox) {
                checkbox.checked = false; 
                checkbox.disabled = true; 
                checkbox.closest('.gallery-item').classList.add('disabled'); 
            }
        });
    } else {
        checkboxes.forEach(checkbox => {
            checkbox.disabled = false; 
            checkbox.closest('.gallery-item').classList.remove('disabled'); 
        });
    }
}

function populateGallery() {
    gallery.innerHTML = '';

    const illustrationsToDisplay = baseIllustrations.slice(0, Math.min(DISPLAY_QUANTITY, baseIllustrations.length));

    illustrationsToDisplay.forEach((illustration, index) => {
        const item = createGalleryItem(illustration, index);
        gallery.appendChild(item);
    });

    const initiallyChecked = gallery.querySelector('.illustration-checkbox input[type="checkbox"]:checked');

}

function updateCalculationDisplay() {
    const quantity = parseInt(quantitySlider.value, 10);
    currentQuantitySpan.textContent = quantity;

    let selectedIllustrationsBaseCost = 0;

    const selectedCheckbox = gallery.querySelector('.illustration-checkbox input[type="checkbox"]:checked');

    if (selectedCheckbox) {
        const itemDiv = selectedCheckbox.closest('.gallery-item');
        const index = parseInt(itemDiv.dataset.index, 10);
        if (index >= 0 && index < baseIllustrations.length) {
            selectedIllustrationsBaseCost = baseIllustrations[index].price;
        } else {
            console.warn("Selected illustration index out of bounds:", index);
            selectedCheckbox.checked = false;
            handleCheckboxChange(selectedCheckbox); 
        }
    }

    let baseTotal = selectedIllustrationsBaseCost * quantity;

    if (optionTextLayout.checked) {
        baseTotal += quantity * TEXT_LAYOUT_PRICE_PER_ILLUSTRATION;
    }
    if (optionCoverDesign.checked) {
        baseTotal += COVER_DESIGN_PRICE;
    }
    if (optionBookTrailer.checked) {
        baseTotal += BOOK_TRAILER_PRICE;
    }
    if (optionTranslation.checked) {
        baseTotal += quantity * TRANSLATION_PRICE_PER_ILLUSTRATION;
    }
    if (optionAttractiveText.checked) {
        baseTotal += ATTRACTIVE_TEXT_PRICE;
    }

    let finalPrice = baseTotal;

    const cashDiscountOptionDiv = optionCashDiscount.closest('.payment-option');
    const fiftyFiftyOptionDiv = optionFiftyFifty.closest('.payment-option');
    const priceLabel = document.getElementById('price-label');

    document.querySelectorAll('.payment-option').forEach(div => div.classList.remove('selected'));

    if (optionCashDiscount.checked && optionFiftyFifty.checked) {
        optionFiftyFifty.checked = false;
    }

    if (optionCashDiscount.checked) {
        finalPrice = baseTotal * 0.9;
        cashDiscountOptionDiv.classList.add('selected');
        priceLabel.textContent = 'Preço Total:';
    } else if (optionFiftyFifty.checked) {
        finalPrice = baseTotal * 0.5;
        fiftyFiftyOptionDiv.classList.add('selected');
        priceLabel.textContent = 'Entrada:';
    } else {
        finalPrice = baseTotal; 
        priceLabel.textContent = 'Preço Total:';
    }

     totalPriceSpan.textContent = `R$ ${finalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function updateModalContent(newIndex) {
    if (currentModalImages.length === 0) {
        console.error("No images available for modal.");
        closeModal();
        return;
    }

    const effectiveIndex = (newIndex % currentModalImages.length + currentModalImages.length) % currentModalImages.length;

    const imageItem = currentModalImages[effectiveIndex];

    if (!imageItem || !imageItem.src) {
        console.error("Invalid image item at index", effectiveIndex, imageItem);
        closeModal();
        return;
    }

    modalImage.src = imageItem.src;

    let descriptionText = 'Descrição não disponível.';
    if (imageItem.description) {
        descriptionText = imageItem.description;
    } else if (imageItem.baseIndex !== undefined && baseIllustrations[imageItem.baseIndex]) {
        descriptionText = baseIllustrations[imageItem.baseIndex].description;
    }

    modalDescription.textContent = descriptionText;

    currentModalIndex = effectiveIndex;
}

function openModal(baseIndex) {
    const baseIllustration = baseIllustrations[baseIndex];

    if (!baseIllustration) {
        console.error("Base illustration not found for index:", baseIndex);
        return;
    }

    currentModalImages = [];

    currentModalImages.push({ src: baseIllustration.src, baseIndex: baseIndex, description: baseIllustration.description });

   switch (baseIndex) {
    case 0:
        currentModalImages.push(...additionalModalImagesForFirstIllustration);
        break;
    case 1:
        currentModalImages.push(...additionalModalImagesForSecondIllustration);
        break;
    case 2:
        currentModalImages.push(...additionalModalImagesForThirdIllustration);
        break;
    case 3:
        currentModalImages.push(...additionalModalImagesForFourthIllustration);
        break;
    case 4:
        currentModalImages.push(...additionalModalImagesForFifthIllustration);
        break;
    case 5:
        currentModalImages.push(...additionalModalImagesForSixthIllustration);
        break;
    case 6:
        currentModalImages.push(...additionalModalImagesForSeventhIllustration);
        break;
    case 7:
        currentModalImages.push(...additionalModalImagesForEighthIllustration);
        break;
}


    currentModalIndex = 0;
    updateModalContent(0);

    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
    currentModalImages = [];
    currentModalIndex = 0;
    modalImage.src = "";
    modalDescription.textContent = "";
}

function closeQrModal() {
    qrModal.classList.remove('active');
    if (qrcodeDiv) {
        qrcodeDiv.innerHTML = ''; 
    }
}

// New functions for service details modal
function openServiceDetailsModal(serviceKey) {
    const details = serviceDetails[serviceKey];
    if (details) {
        serviceDetailsTitle.textContent = details.title;
        serviceDetailsDescription.textContent = details.description;
        serviceDetailsModal.classList.add('active');
    } else {
        console.error('Service details not found for key:', serviceKey);
    }
}

function closeServiceDetailsModal() {
    serviceDetailsModal.classList.remove('active');
}


prevButton.addEventListener('click', () => {
    updateModalContent(currentModalIndex - 1);
});

nextButton.addEventListener('click', () => {
    updateModalContent(currentModalIndex + 1);
});

closeButton.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
    if (event.target === qrModal) {
        closeQrModal();
    }
    // New: Close service details modal when clicking outside
    if (event.target === serviceDetailsModal) {
        closeServiceDetailsModal();
    }
});

qrModalClose.addEventListener('click', closeQrModal);

// New: Event listener for service details modal close button
serviceDetailsCloseButton.addEventListener('click', closeServiceDetailsModal);

quantitySlider.addEventListener('input', updateCalculationDisplay);

optionTextLayout.addEventListener('change', updateCalculationDisplay);
optionCoverDesign.addEventListener('change', updateCalculationDisplay);
optionBookTrailer.addEventListener('change', updateCalculationDisplay);
optionTranslation.addEventListener('change', updateCalculationDisplay);
optionAttractiveText.addEventListener('change', updateCalculationDisplay);

// New: Add event listeners to info buttons
infoButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent checkbox/label click event from firing
        const serviceKey = event.target.dataset.service;
        openServiceDetailsModal(serviceKey);
    });
});


optionCashDiscount.addEventListener('change', function() {
    if (this.checked) {
        optionFiftyFifty.checked = false; 
    }
    updateCalculationDisplay();
});
optionFiftyFifty.addEventListener('change', function() {
    if (this.checked) {
        optionCashDiscount.checked = false; 
    }
    updateCalculationDisplay();
});

generateQrcodeButton.addEventListener('click', () => {
    const totalAmountText = totalPriceSpan.textContent;
    const totalAmount = parseFloat(totalAmountText.replace('R$', '').replace(/\./g, '').replace(',', '.').trim());

    if (isNaN(totalAmount) || totalAmount <= 0) {
        alert("Por favor, selecione uma ilustração e quantidade para calcular o valor total.");
        return;
    }

    const pixPayload = generatePixData(totalAmount);

    console.log("Generated Pix Payload:", pixPayload); 

    if (qrcodeDiv) {
        qrcodeDiv.innerHTML = ''; 
    } else {
        console.error("QR code div not found.");
        alert("Erro interno: Elemento QR Code não encontrado.");
        return;
    }

    try {
        if (typeof QRCode !== 'undefined') {
            new QRCode(qrcodeDiv, {
                text: pixPayload, 
                width: 256, 
                height: 256,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H 
            });

            let paymentMethodInfo = 'Valor Total';
            if (optionCashDiscount.checked) {
                paymentMethodInfo = 'Á Vista (10% de desconto)';
            } else if (optionFiftyFifty.checked) {
                 paymentMethodInfo = '50% para iniciar, 50% na entrega (Valor parcial)';
            }

            // Gather all selected information for display
            let qrDetailsHtml = `
                <p><strong>Detalhes da Compra:</strong></p>
                <ul>
            `;

            const quantity = parseInt(quantitySlider.value, 10);
            const selectedCheckbox = gallery.querySelector('.illustration-checkbox input[type="checkbox"]:checked');
            let selectedIllustrationDescription = 'Nenhuma ilustração base selecionada';

            if (selectedCheckbox) {
                const itemDiv = selectedCheckbox.closest('.gallery-item');
                const index = parseInt(itemDiv.dataset.index, 10);
                if (index >= 0 && index < baseIllustrations.length) {
                    selectedIllustrationDescription = `Ilustração ${String(index + 1).padStart(2, '0')}`;
                }
            }
            qrDetailsHtml += `<li><strong>Estilo de Ilustração:</strong> ${selectedIllustrationDescription}</li>`;
            qrDetailsHtml += `<li><strong>Quantidade de Ilustrações:</strong> ${quantity}</li>`;

            const selectedAddOns = [];
            if (optionTextLayout.checked) selectedAddOns.push(`Texto e diagramação (R$ ${TEXT_LAYOUT_PRICE_PER_ILLUSTRATION})`);
            if (optionCoverDesign.checked) selectedAddOns.push(`Ilustração de design de capa (R$ ${COVER_DESIGN_PRICE})`);
            if (optionBookTrailer.checked) selectedAddOns.push(`Criação de book trailer (R$ ${BOOK_TRAILER_PRICE})`);
            if (optionTranslation.checked) selectedAddOns.push(`Tradução para outras línguas (R$ ${TRANSLATION_PRICE_PER_ILLUSTRATION})`);
            if (optionAttractiveText.checked) selectedAddOns.push(`Deixar texto mais atraente (R$ ${ATTRACTIVE_TEXT_PRICE})`);

            if (selectedAddOns.length > 0) {
                qrDetailsHtml += `<li><strong>Serviços Adicionais:</strong><ul>`;
                selectedAddOns.forEach(add => {
                    qrDetailsHtml += `<li>- ${add}</li>`;
                });
                qrDetailsHtml += `</ul></li>`;
            } else {
                qrDetailsHtml += `<li><strong>Serviços Adicionais:</strong> Nenhum</li>`;
            }

            qrDetailsHtml += `
                </ul>
                <p><strong>Informações de Pagamento:</strong></p>
                <ul>
                    <li><strong>Método:</strong> ${paymentMethodInfo}</li>
                    <li><strong>Nome:</strong> ${nomeRecebedor}</li>
                    <li><strong>Chave Pix:</strong> ${chavePix} (E-mail)</li>
                    <li><strong>Cidade:</strong> ${cidadeRecebedor}</li>
                    <li><strong>Valor:</strong> R$ ${totalAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</li>
                </ul>
                <p>Escaneie o QR Code acima para pagar via Pix.</p>
            `;

            qrModalMessage.innerHTML = qrDetailsHtml;
            qrModal.classList.add('active');

        } else {
            console.error("QRCode library not loaded.");
            alert("Erro ao carregar a biblioteca de QR Code.");
        }
    } catch (error) {
        console.error("Error generating QR Code:", error);
        alert("Erro ao gerar o QR Code.");
    }
});

copyPixButton.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(chavePix);
        alert("Chave Pix copiada para a área de transferência!");
    } catch (err) {
        console.error('Falha ao copiar a chave Pix: ', err);
        alert("Erro ao copiar a chave Pix. Por favor, copie manualmente: " + chavePix);
    }
});

downloadQrButton.addEventListener('click', async () => {
    const qrCanvas = qrcodeDiv.querySelector('canvas');
    if (!qrCanvas) {
        alert("QR Code não disponível para download.");
        return;
    }

    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Get the innerText from qrModalMessage, then remove leading/trailing whitespace
        const detailsText = qrModalMessage.innerText.trim(); 
        
        // Split the text into lines that fit within the PDF width
        const lines = doc.splitTextToSize(detailsText, 180); 
        
        // Set initial Y position and add text to PDF
        let currentY = 10;
        doc.text(lines, 10, currentY);

        // Update currentY to be after the added text, plus some margin
        currentY += (lines.length * doc.getLineHeight()) / doc.internal.scaleFactor + 10; 

        // Add QR code image to PDF
        const imgData = qrCanvas.toDataURL('image/png'); // Use the canvas directly

        const imgWidth = 80; 
        const imgHeight = (qrCanvas.height * imgWidth) / qrCanvas.width; 

        doc.addImage(imgData, 'PNG', 10, currentY, imgWidth, imgHeight);

        doc.save('detalhes_pagamento_pix.pdf');

    } catch (error) {
        console.error("Erro ao gerar PDF:", error);
        alert("Erro ao gerar o PDF. Por favor, tente novamente.");
    }
});

populateGallery();
updateCalculationDisplay();
