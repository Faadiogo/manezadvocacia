// Mock data for development and preview
// Remove this file when integrating with Supabase

export interface MockUser {
  id: string;
  email: string;
  full_name: string;
  role: 'admin' | 'editor' | 'author';
}

export interface MockArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  published: boolean;
  author_id: string;
  created_at: string;
  updated_at: string;
  featured_image?: string;
  tags?: string[];
  profiles: {
    full_name: string;
  };
}

// Mock user data
export const mockUser: MockUser = {
  id: '1',
  email: 'admin@manezadvocacia.com.br',
  full_name: 'Dr. Raphael Henrique',
  role: 'admin'
};

// Mock articles data
export const mockArticles: MockArticle[] = [
  {
    id: '1',
    title: 'Direitos do Consumidor: O que você precisa saber em 2025',
    excerpt: 'Entenda os principais direitos do consumidor e como exercê-los de forma eficaz. Conheça as mudanças na legislação e como se proteger.',
    content: `
      <h2>Introdução aos Direitos do Consumidor</h2>
      <p>O Código de Defesa do Consumidor (CDC) é uma das legislações mais importantes para proteger os direitos dos cidadãos brasileiros nas relações de consumo. Criado em 1990, o CDC estabelece normas de proteção e defesa do consumidor.</p>
      
      <h3>Principais Direitos Garantidos</h3>
      <ul>
        <li><strong>Direito à informação clara e adequada</strong> sobre produtos e serviços</li>
        <li><strong>Proteção contra publicidade enganosa</strong> e práticas abusivas</li>
        <li><strong>Direito de arrependimento</strong> em compras online (7 dias)</li>
        <li><strong>Garantia legal</strong> de 30 dias para produtos não duráveis e 90 dias para duráveis</li>
      </ul>
      
      <h3>Como Exercer Seus Direitos</h3>
      <p>Para exercer seus direitos como consumidor, é importante:</p>
      <ol>
        <li>Guardar sempre notas fiscais e comprovantes</li>
        <li>Documentar problemas com fotos e descrições</li>
        <li>Tentar resolver primeiro diretamente com a empresa</li>
        <li>Procurar órgãos de defesa do consumidor quando necessário</li>
      </ol>
      
      <blockquote>
        "A proteção do consumidor é um direito fundamental que deve ser exercido com conhecimento e responsabilidade."
      </blockquote>
      
      <h3>Mudanças Recentes na Legislação</h3>
      <p>Em 2025, algumas mudanças importantes foram implementadas para fortalecer ainda mais os direitos do consumidor, especialmente no ambiente digital.</p>
    `,
    slug: 'direitos-consumidor-2025',
    published: true,
    author_id: '1',
    created_at: '2025-01-15T10:00:00Z',
    updated_at: '2025-01-15T10:00:00Z',
    featured_image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['direito do consumidor', 'legislação', 'proteção'],
    profiles: {
      full_name: 'Dra. Vanessa Mañez'
    }
  },
  {
    id: '2',
    title: 'Contratos de Trabalho: Modalidades e Direitos',
    excerpt: 'Conheça os diferentes tipos de contratos de trabalho e os direitos garantidos a cada modalidade. Informações essenciais para empregados e empregadores.',
    content: `
      <h2>Tipos de Contratos de Trabalho</h2>
      <p>A legislação trabalhista brasileira prevê diferentes modalidades de contratação, cada uma com suas características específicas e direitos garantidos.</p>
      
      <h3>Contrato por Prazo Indeterminado</h3>
      <p>É a modalidade mais comum e oferece maior estabilidade ao trabalhador. Principais características:</p>
      <ul>
        <li>Não possui data definida para término</li>
        <li>Garante todos os direitos trabalhistas</li>
        <li>Aviso prévio de 30 dias em caso de demissão</li>
        <li>Direito ao FGTS e seguro-desemprego</li>
      </ul>
      
      <h3>Contrato por Prazo Determinado</h3>
      <p>Utilizado para situações específicas e temporárias:</p>
      <ul>
        <li>Duração máxima de 2 anos</li>
        <li>Pode ser renovado uma vez</li>
        <li>Não há aviso prévio</li>
        <li>Multa de 50% do FGTS em caso de rescisão antecipada pelo empregador</li>
      </ul>
      
      <h3>Contrato de Experiência</h3>
      <p>Modalidade especial para avaliar a adaptação do funcionário:</p>
      <ul>
        <li>Prazo máximo de 90 dias</li>
        <li>Pode ser renovado uma vez</li>
        <li>Todos os direitos trabalhistas garantidos</li>
      </ul>
      
      <h3>Direitos Fundamentais</h3>
      <p>Independente da modalidade, alguns direitos são garantidos a todos os trabalhadores:</p>
      <ol>
        <li>Salário mínimo ou piso da categoria</li>
        <li>13º salário</li>
        <li>Férias remuneradas</li>
        <li>Adicional de 1/3 sobre as férias</li>
        <li>Repouso semanal remunerado</li>
        <li>Licença-maternidade e paternidade</li>
      </ol>
    `,
    slug: 'contratos-trabalho-modalidades',
    published: true,
    author_id: '1',
    created_at: '2025-01-10T14:30:00Z',
    updated_at: '2025-01-10T14:30:00Z',
    featured_image: 'https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['direito trabalhista', 'contratos', 'CLT'],
    profiles: {
      full_name: 'Dr. Diego Ribeiro'
    }
  },
  {
    id: '3',
    title: 'Planejamento Sucessório: Protegendo o Patrimônio Familiar',
    excerpt: 'Entenda a importância do planejamento sucessório e as principais ferramentas jurídicas para proteger o patrimônio familiar e facilitar a transmissão de bens.',
    content: `
      <h2>O que é Planejamento Sucessório?</h2>
      <p>O planejamento sucessório é um conjunto de estratégias jurídicas e financeiras que visa organizar a transmissão do patrimônio de uma pessoa para seus herdeiros, de forma eficiente e com menor incidência de tributos.</p>
      
      <h3>Por que é Importante?</h3>
      <p>Sem um planejamento adequado, a sucessão pode gerar:</p>
      <ul>
        <li>Conflitos familiares prolongados</li>
        <li>Alta carga tributária</li>
        <li>Bloqueio de bens por anos</li>
        <li>Custos elevados com inventário</li>
        <li>Perda de oportunidades de negócio</li>
      </ul>
      
      <h3>Principais Instrumentos</h3>
      
      <h4>1. Testamento</h4>
      <p>Documento que permite dispor sobre a parte disponível do patrimônio (50% dos bens):</p>
      <ul>
        <li>Pode ser público, cerrado ou particular</li>
        <li>Permite escolher herdeiros para a parte disponível</li>
        <li>Pode conter disposições não patrimoniais</li>
      </ul>
      
      <h4>2. Doação com Reserva de Usufruto</h4>
      <p>Estratégia que permite antecipar a sucessão:</p>
      <ul>
        <li>Transfere a propriedade mantendo o uso</li>
        <li>Reduz o patrimônio para fins de inventário</li>
        <li>Pode gerar economia tributária</li>
      </ul>
      
      <h4>3. Holding Familiar</h4>
      <p>Criação de empresa para administrar o patrimônio:</p>
      <ul>
        <li>Facilita a gestão dos bens</li>
        <li>Permite planejamento tributário</li>
        <li>Profissionaliza a administração</li>
        <li>Facilita a sucessão empresarial</li>
      </ul>
      
      <h3>Quando Começar?</h3>
      <p>O planejamento sucessório deve ser iniciado o quanto antes, preferencialmente quando a pessoa ainda está em plena capacidade civil e com boa saúde. Não existe idade mínima ou patrimônio mínimo para começar.</p>
      
      <blockquote>
        "O melhor momento para fazer o planejamento sucessório foi ontem. O segundo melhor momento é hoje."
      </blockquote>
    `,
    slug: 'planejamento-sucessorio-patrimonio',
    published: true,
    author_id: '1',
    created_at: '2025-01-05T09:15:00Z',
    updated_at: '2025-01-05T09:15:00Z',
    featured_image: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['direito sucessório', 'planejamento', 'patrimônio'],
    profiles: {
      full_name: 'Dr. Raphael Henrique'
    }
  },
  {
    id: '4',
    title: 'Compliance Empresarial: Prevenindo Riscos Jurídicos',
    excerpt: 'Descubra como implementar um programa de compliance eficaz em sua empresa para prevenir riscos jurídicos e garantir conformidade com a legislação.',
    content: `
      <h2>O que é Compliance?</h2>
      <p>Compliance é o conjunto de disciplinas para fazer cumprir as normas legais e regulamentares, as políticas e as diretrizes estabelecidas para o negócio e para as atividades da instituição ou empresa.</p>
      
      <h3>Importância do Compliance</h3>
      <p>Um programa de compliance bem estruturado traz diversos benefícios:</p>
      <ul>
        <li>Redução de riscos legais e regulatórios</li>
        <li>Melhoria da reputação corporativa</li>
        <li>Aumento da confiança de investidores</li>
        <li>Prevenção de multas e sanções</li>
        <li>Melhoria dos processos internos</li>
      </ul>
      
      <h3>Pilares do Compliance</h3>
      
      <h4>1. Prevenção</h4>
      <p>Identificação e mitigação de riscos antes que se tornem problemas:</p>
      <ul>
        <li>Mapeamento de riscos</li>
        <li>Políticas e procedimentos claros</li>
        <li>Treinamento e conscientização</li>
      </ul>
      
      <h4>2. Detecção</h4>
      <p>Sistemas para identificar desvios e irregularidades:</p>
      <ul>
        <li>Monitoramento contínuo</li>
        <li>Auditoria interna</li>
        <li>Canal de denúncias</li>
      </ul>
      
      <h4>3. Resposta</h4>
      <p>Ações corretivas quando problemas são identificados:</p>
      <ul>
        <li>Investigação adequada</li>
        <li>Medidas disciplinares</li>
        <li>Correção de processos</li>
      </ul>
      
      <h3>Implementação Prática</h3>
      <ol>
        <li><strong>Diagnóstico inicial:</strong> Avaliação da situação atual</li>
        <li><strong>Definição de políticas:</strong> Criação de código de conduta</li>
        <li><strong>Estruturação da área:</strong> Definição de responsabilidades</li>
        <li><strong>Treinamento:</strong> Capacitação de colaboradores</li>
        <li><strong>Monitoramento:</strong> Acompanhamento contínuo</li>
        <li><strong>Melhoria contínua:</strong> Ajustes e aperfeiçoamentos</li>
      </ol>
      
      <h3>Legislações Relevantes</h3>
      <p>No Brasil, diversas leis reforçam a importância do compliance:</p>
      <ul>
        <li>Lei Anticorrupção (Lei 12.846/2013)</li>
        <li>Lei Geral de Proteção de Dados (LGPD)</li>
        <li>Lei de Lavagem de Dinheiro</li>
        <li>Código de Defesa do Consumidor</li>
      </ul>
    `,
    slug: 'compliance-empresarial-riscos',
    published: false,
    author_id: '1',
    created_at: '2025-01-20T16:45:00Z',
    updated_at: '2025-01-20T16:45:00Z',
    featured_image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['compliance', 'empresarial', 'prevenção'],
    profiles: {
      full_name: 'Dr. Raphael Henrique'
    }
  }
];

// Mock stats for admin dashboard
export const mockStats = {
  totalArticles: mockArticles.length,
  publishedArticles: mockArticles.filter(a => a.published).length,
  draftArticles: mockArticles.filter(a => !a.published).length,
};

// Helper functions to simulate API calls
export const getMockArticles = (publishedOnly = false): Promise<MockArticle[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const articles = publishedOnly 
        ? mockArticles.filter(article => article.published)
        : mockArticles;
      resolve(articles);
    }, 500); // Simulate network delay
  });
};

export const getMockArticleBySlug = (slug: string): Promise<MockArticle | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const article = mockArticles.find(a => a.slug === slug && a.published) || null;
      resolve(article);
    }, 300);
  });
};

export const getMockUser = (): Promise<MockUser | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate logged in user
      resolve(mockUser);
    }, 200);
  });
};

export const mockSignIn = (email: string, password: string): Promise<MockUser> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'admin@manezadvocacia.com.br' && password === 'admin123') {
        resolve(mockUser);
      } else {
        reject(new Error('Credenciais inválidas'));
      }
    }, 1000);
  });
};

export const mockSignUp = (email: string, password: string, fullName: string): Promise<MockUser> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newUser: MockUser = {
        id: Date.now().toString(),
        email,
        full_name: fullName,
        role: 'author'
      };
      resolve(newUser);
    }, 1000);
  });
};