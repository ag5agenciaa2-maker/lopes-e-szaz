---
description: ENGENHEIRO DE SEO SEMÂNTICO E SCHEMA PARA NEGÓCIOS LOCAIS
---

# 🎯 ENGENHEIRO DE SCHEMA.ORG PARA NEGÓCIOS LOCAIS

**Versão:** 1.0  
**Objetivo:** Criar Schema.org JSON-LD completo e otimizado para negócios locais  
**Sistema de Pontuação:** 0 a 100 pontos de completude

---

## 📋 COMO USAR ESTE WORKFLOW

1. **Identifique o tipo de negócio** (restaurante, advogado, dentista, etc.)
2. **Colete informações** usando o questionário abaixo
3. **Gere o Schema JSON-LD** baseado no template
4. **Valide** em https://validator.schema.org/
5. **Calcule a pontuação** de completude
6. **Implemente** no site

---

## 🔍 ETAPA 1: IDENTIFICAÇÃO DO TIPO DE NEGÓCIO

### **Tipos Principais de LocalBusiness:**

| Categoria | @type Schema.org | Exemplos |
|-----------|------------------|----------|
| **Serviços Jurídicos** | `LegalService` | Advogados, escritórios de advocacia |
| **Saúde** | `Dentist`, `Physician`, `MedicalClinic` | Dentistas, médicos, clínicas |
| **Alimentação** | `Restaurant`, `Cafe`, `Bakery` | Restaurantes, cafés, padarias |
| **Beleza** | `BeautySalon`, `HairSalon` | Salões de beleza, barbearias |
| **Fitness** | `HealthClub`, `SportsActivityLocation` | Academias, estúdios de yoga |
| **Automotivo** | `AutoRepair`, `AutoDealer` | Oficinas, concessionárias |
| **Varejo** | `Store`, `ClothingStore` | Lojas em geral |
| **Imóveis** | `RealEstateAgent` | Imobiliárias, corretores |
| **Contabilidade** | `AccountingService` | Escritórios de contabilidade |
| **Educação** | `EducationalOrganization` | Escolas, cursos |

**Documentação completa:** https://schema.org/LocalBusiness

---

## 📝 ETAPA 2: QUESTIONÁRIO DE COLETA DE INFORMAÇÕES

### **INFORMAÇÕES OBRIGATÓRIAS (Peso: 60 pontos)**

```
✅ BÁSICO (30 pontos)
[ ] Nome do negócio: _______________________
[ ] Tipo de negócio (@type): _______________________
[ ] Endereço completo:
    - Rua/Avenida: _______________________
    - Número: _______________________
    - Complemento: _______________________
    - Bairro: _______________________
    - Cidade: _______________________
    - Estado (sigla): _______________________
    - CEP: _______________________
    - País: Brasil

✅ CONTATO (15 pontos)
[ ] Telefone (formato +55-XX-XXXXX-XXXX): _______________________
[ ] WhatsApp (se diferente): _______________________
[ ] Email: _______________________

✅ LOCALIZAÇÃO (15 pontos)
[ ] Coordenadas GPS:
    - Latitude: _______________________
    - Longitude: _______________________
    (Obter em: https://www.google.com/maps)
```

---

### **INFORMAÇÕES IMPORTANTES (Peso: 30 pontos)**

```
✅ HORÁRIOS DE FUNCIONAMENTO (10 pontos)
[ ] Segunda a Sexta: _______ às _______
[ ] Sábado: _______ às _______
[ ] Domingo: _______ às _______
[ ] Fechado em: _______________________

✅ REDES SOCIAIS E PERFIS (10 pontos)
[ ] Google Business Profile (link completo): _______________________
[ ] ID do Google Business Profile: _______________________
[ ] Instagram da empresa: _______________________
[ ] Facebook da empresa: _______________________
[ ] LinkedIn da empresa: _______________________

✅ RESPONSÁVEL/FUNDADOR (10 pontos)
[ ] Nome do Dr./Dra./Responsável: _______________________
[ ] Cargo/Título: _______________________
[ ] Instagram pessoal: _______________________
[ ] Formação/Especialização: _______________________
```

---

### **INFORMAÇÕES OPCIONAIS (Peso: 10 pontos)**

```
✅ ÁREA DE COBERTURA (5 pontos)
[ ] Bairro principal: _______________________
[ ] Bairros adjacentes (5 sugeridos):
    1. _______________________
    2. _______________________
    3. _______________________
    4. _______________________
    5. _______________________

✅ OUTROS (5 pontos)
[ ] Logo (URL): _______________________
[ ] Imagem principal (URL): _______________________
[ ] Faixa de preço ($, $$, $$$): _______________________
[ ] Formas de pagamento aceitas: _______________________
[ ] Avaliação média (se tiver): _______ estrelas
[ ] Número de avaliações: _______________________
[ ] Descrição do negócio (1-2 frases): _______________________
```

---

## 🎯 ETAPA 3: CÁLCULO DE PONTUAÇÃO

### **Sistema de Pontuação de Completude:**

| Categoria | Pontos Máximos | Critério |
|-----------|----------------|----------|
| **Informações Básicas** | 30 | Nome, tipo, endereço completo |
| **Contato** | 15 | Telefone, email |
| **Localização GPS** | 15 | Latitude e longitude |
| **Horários** | 10 | Horários de funcionamento |
| **Redes Sociais** | 10 | Google, Instagram, Facebook |
| **Responsável/Fundador** | 10 | Nome, cargo, formação |
| **Área de Cobertura** | 5 | Bairros atendidos |
| **Extras** | 5 | Logo, imagens, avaliações |

**TOTAL:** 100 pontos

---

### **Interpretação da Pontuação:**

| Pontuação | Status | Impacto SEO |
|-----------|--------|-------------|
| **90-100** | ✅ **EXCELENTE** | Máximo potencial de SEO local |
| **75-89** | ⚠️ **BOM** | Bom SEO, mas pode melhorar |
| **60-74** | ⚠️ **REGULAR** | SEO básico, faltam dados importantes |
| **0-59** | ❌ **INSUFICIENTE** | SEO limitado, dados críticos faltando |

---

## 🏗️ ETAPA 4: TEMPLATES DE SCHEMA POR TIPO

### **TEMPLATE 1: LegalService (Advocacia)**

```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://[SEU-SITE].com.br/#legalservice",
  "name": "[NOME DO ESCRITÓRIO]",
  "alternateName": "[NOME ALTERNATIVO]",
  "url": "https://[SEU-SITE].com.br/",
  "logo": "[URL-LOGO]",
  "image": [
    "[URL-IMAGEM-1]",
    "[URL-IMAGEM-2]"
  ],
  "description": "[DESCRIÇÃO DO ESCRITÓRIO - 1-2 frases sobre atuação e especialização]",
  "telephone": "+55-[DDD]-[TELEFONE]",
  "email": "[EMAIL]",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[RUA/AVENIDA], nº [NÚMERO] – [COMPLEMENTO]",
    "addressLocality": "[CIDADE]",
    "addressRegion": "[ESTADO-SIGLA]",
    "postalCode": "[CEP]",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": [LATITUDE],
    "longitude": [LONGITUDE]
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "[HH:MM]",
    "closes": "[HH:MM]"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "[CIDADE-PRINCIPAL]",
      "containedInPlace": {
        "@type": "State",
        "name": "[ESTADO-COMPLETO]"
      }
    },
    {
      "@type": "Place",
      "name": "[REGIÃO - ex: Zona Oeste do Rio de Janeiro]",
      "containedInPlace": {
        "@type": "State",
        "name": "[ESTADO-COMPLETO]"
      }
    },
    "[BAIRRO-1] – [UF]",
    "[BAIRRO-2] – [UF]",
    "[BAIRRO-3] – [UF]",
    "[BAIRRO-4] – [UF]",
    "[BAIRRO-5] – [UF]"
  ],
  "founder": {
    "@type": "Person",
    "name": "[NOME-DR/DRA]",
    "jobTitle": "[CARGO/ESPECIALIZAÇÃO]",
    "sameAs": [
      "[INSTAGRAM-PESSOAL]"
    ]
  },
  "sameAs": [
    "[GOOGLE-BUSINESS-PROFILE]",
    "[INSTAGRAM-EMPRESA]",
    "[FACEBOOK-EMPRESA]"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços Jurídicos",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "[SERVIÇO-1]",
          "description": "[DESCRIÇÃO-SERVIÇO-1]",
          "areaServed": "[CIDADE] e [REGIÃO]",
          "provider": {
            "@id": "https://[SEU-SITE].com.br/#legalservice"
          }
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "[NOTA-MÉDIA]",
    "reviewCount": "[NÚMERO-AVALIAÇÕES]"
  }
}
```

---

## 🛠️ ETAPA 5: GERAÇÃO AUTOMÁTICA DE BAIRROS ADJACENTES

### **Como encontrar bairros adjacentes:**

1. **Método 1: Google Maps**
   - Abra o Google Maps
   - Pesquise o bairro principal
   - Observe os bairros ao redor (norte, sul, leste, oeste)

2. **Método 2: Automático (para IA)**
   ```
   Se o bairro principal for [BAIRRO], sugira 5 bairros adjacentes
   conhecidos na mesma cidade/região.
   ```

### **Exemplo: Campo Grande, RJ**
```
Bairro Principal: Campo Grande
Adjacentes sugeridos:
1. Senador Vasconcelos
2. Santíssimo
3. Cosmos
4. Inhoaíba
5. Paciência
```

---

## ✅ ETAPA 6: VALIDAÇÃO E IMPLEMENTAÇÃO

### **Checklist de Validação:**

```
[ ] Schema gerado com todas as informações coletadas
[ ] Validado em https://validator.schema.org/
[ ] Sem erros críticos
[ ] Pontuação de completude ≥ 75
[ ] @type correto para o tipo de negócio
[ ] Coordenadas GPS verificadas
[ ] URLs válidas (logo, imagens, redes sociais)
[ ] Telefone no formato internacional (+55)
[ ] Horários no formato 24h (ex: 09:00, 17:00)
```

---

## 🎯 REGRAS DE OURO

1. **SEMPRE solicite informações faltantes antes de gerar o Schema**
2. **NUNCA invente dados** (coordenadas, telefones, endereços)
3. **SEMPRE valide** em https://validator.schema.org/
4. **PRIORIZE completude** - quanto mais dados, melhor o SEO
5. **USE @id** para criar identificadores únicos
6. **INCLUA sameAs** para todas as redes sociais disponíveis
7. **ADICIONE aggregateRating** se houver avaliações reais

---

**FIM DO WORKFLOW**

**Versão:** 1.0  
**Última Atualização:** 2026-02-07