import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { BookObject } from '../book-object/book-object';

interface Book {
  title: string;
  description: string;
  category: string;
  cover: string;
  featured?: boolean;
  buttonLabel: string;
  linkDigital: string | null;
  linkFisico: string | null;
}

interface Author {
  name: string;
  bio: string;
  photo: string;
  tags: string[];
  socialLinks: {
    platform: string;
    url: string;
  }[];
}

interface Inspiration {
  title: string;
  quote: string;
  description: string;
  link: string;
  tags: string[];
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, BookObject],
})
export class HeroComponent {
  readonly birthDate = new Date(2004, 6, 3);

  readonly books = signal<Book[]>([
    {
      title: 'Cartas para Deus',
      description:
        'Mais do que reflexões, estas páginas carregam a essência de uma missão: lembrar cada pessoa de que ela é vista, amada e acolhida pelo Pai. Em tempos de conexões rápidas e relações superficiais, o livro resgata o valor do cuidado verdadeiro, do gesto silencioso e da palavra escrita com intenção e afeto. Assim como antigas cartas entregues à mão, cada texto foi pensado para alcançar a alma como uma “flecha certeira” do Espírito Santo, rompendo escudos interiores e permitindo que a luz entre novamente.',
      category: 'Espiritualidade Cristã',
      cover: 'assets/books/cartas-para-deus.png',
      featured: true,
      buttonLabel: 'Ler agora',
      linkFisico: 'https://pay.hotmart.com/W105987188Q',
      linkDigital: 'https://pay.hotmart.com/U105959798T',
    },
    {
      title: 'Anotações que fiz no silêncio da minha alma',
      description:
        'Este não é um livro para ser apenas lido, mas para ser vivido. Cada capítulo termina com reflexões práticas para você meditar e aplicar em sua própria jornada espiritual. Se você anseia por uma fé mais profunda, se busca a paz em meio às tribulações, ou se simplesmente deseja redescobrir a presença de Deus no silêncio da sua própria alma, estas páginas foram escritas para você. Se sua alma está inquieta, estas páginas podem ser o mapa que você procura.',
      category: 'Literatura Contemplativa',
      cover: 'assets/books/silencio-da-alma.png',
      buttonLabel: 'Ler agora',
      linkFisico:
        'https://www.amazon.com/-/pt/dp/B0G4C8V1JS/ref=sr_1_1?crid=16TNJD5R71Z6N&dib=eyJ2IjoiMSJ9.st6GZPpaPrV2bV_g_-GR2rT-fTVINf9f0N111wCevBj2JUJudOnWfOAWTiT6X42cMw03THEaMQKMMFh5QFj4ckOHaMmNMjwYMMX0QwHiNNy8egCIET_40pX4B9vff1TAc47PHowA0Lml_djpcH1q9G20jYYBxQnlbH5Xlm0_v8oGWqdIL9ch3P9AsoM_cRYZ3m9YsR2NGHmfa2h9pbniIo_yOgV08XhMc7Kf_dUdxSs.3tj1K4SkF7_45zuJU1AG4LP7LIrYYNyj0CQMAbHH3ts&dib_tag=se&keywords=no+silencio+da+minha+alma&qid=1779805340&s=digital-text&sprefix=%2Cdigital-text%2C204&sr=1-1',
      linkDigital:
        'https://www.amazon.com/-/pt/dp/B0G4C8V1JS/ref=sr_1_1?crid=16TNJD5R71Z6N&dib=eyJ2IjoiMSJ9.st6GZPpaPrV2bV_g_-GR2rT-fTVINf9f0N111wCevBj2JUJudOnWfOAWTiT6X42cMw03THEaMQKMMFh5QFj4ckOHaMmNMjwYMMX0QwHiNNy8egCIET_40pX4B9vff1TAc47PHowA0Lml_djpcH1q9G20jYYBxQnlbH5Xlm0_v8oGWqdIL9ch3P9AsoM_cRYZ3m9YsR2NGHmfa2h9pbniIo_yOgV08XhMc7Kf_dUdxSs.3tj1K4SkF7_45zuJU1AG4LP7LIrYYNyj0CQMAbHH3ts&dib_tag=se&keywords=no+silencio+da+minha+alma&qid=1779805340&s=digital-text&sprefix=%2Cdigital-text%2C204&sr=1-1',
    },
    {
      title: 'Além da Corrida',
      description:
        'Neste e-book, vou compartilhar com você o que aprendi e como a corrida me ajudou a quebrar barreiras além de como você também pode aplicar essas lições na sua vida! Se você está preso no ciclo da procrastinação, as estratégias que vou apresentar aqui vão te ajudar a começar agora e a mudar sua mentalidade, porque o melhor momento para agir é sempre o presente. Então permita-me te mostrar os meus aprendizados que vão além da corrida.',
      category: 'Reflexão Humana',
      cover: 'assets/books/alem-da-corrida.png',
      buttonLabel: 'Ler agora!',
      linkFisico: null,
      linkDigital: 'https://pay.hotmart.com/X97524329M',
    },
  ]);

  readonly autor = signal<Author>({
    name: 'Carlos Alberto Barcelos do Amaral',
    bio: `Escritor, programador e mensageiro da esperança.
      Aos 22 anos, Carlos une espiritualidade,
      tecnologia e sensibilidade humana em uma escrita
      contemplativa profundamente acolhedora. Católico, catequista
      e Ministro Extraordinário da Sagrada Comunhão, encontrou nas
      palavras uma extensão daquilo que sempre buscou transmitir:
      presença, escuta e luz em meio aos silêncios
      mais profundos da vida.`,
    photo: 'assets/author/carlos.jpg',
    tags: [
      'Católico',
      'Catequista',
      'Mensageiro',
      'Escritor cristão',
      'Franciscano',
      'Entre outros',
    ],
    socialLinks: [
      {
        platform: 'Instagram',
        url: 'https://instagram.com/joaosilva',
      },
      {
        platform: 'Youtube',
        url: 'https://youtube.com/joaosilva',
      },
      {
        platform: 'TikTok',
        url: 'https://tiktok.com/@joaosilva',
      },
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/joaosilva',
      },
    ],
  });

  readonly inspirations = signal<Inspiration[]>([
    {
      title: 'Bíblia',
      quote: 'A palavra de Deus, fonte de inspiração e sabedoria para minha escrita.',
      description: 'A palavra de Deus, fonte de inspiração e sabedoria para minha escrita.',
      link: 'https://www.bibliaonline.com.br/acf',
      tags: ['Espiritualidade', 'Sabedoria', 'Inspiração'],
    },
    {
      title: 'Santo Agostinho',
      quote:
        'Um dos maiores pensadores cristãos, cuja obra influenciou profundamente minha visão de mundo.',
      description:
        'Um dos maiores pensadores cristãos, cuja obra influenciou profundamente minha visão de mundo.',
      link: 'https://www.britannica.com/biography/Saint-Augustine',
      tags: ['Filosofia', 'Teologia', 'Influência'],
    },
    {
      title: 'A vida intelectual',
      quote: 'Descrição inspiradora sobre A vida intelectual.',
      description: 'Um livro marcante: A vida intelectual, que trouxe grandes reflexões.',
      link: '#',
      tags: ['Leitura', 'Estudo'],
    },
    {
      title: 'Análise da inteligência de Jesus Cristo',
      quote: 'Descrição inspiradora sobre Análise da inteligência de Jesus Cristo.',
      description:
        'Um livro marcante: Análise da inteligência de Jesus Cristo, que trouxe grandes reflexões.',
      link: '#',
      tags: ['Leitura', 'Estudo', 'Cristianismo'],
    },
    {
      title: 'As confissões de Santo Agostinho',
      quote: 'Descrição inspiradora sobre As confissões de Santo Agostinho.',
      description:
        'Um livro marcante: As confissões de Santo Agostinho, que trouxe grandes reflexões.',
      link: '#',
      tags: ['Leitura', 'Estudo', 'Teologia'],
    },
    {
      title: 'Catecismo da Igreja Católica',
      quote: 'Descrição inspiradora sobre Catecismo da Igreja Católica.',
      description: 'Um livro marcante: Catecismo da Igreja Católica, que trouxe grandes reflexões.',
      link: '#',
      tags: ['Leitura', 'Estudo', 'Catolicismo'],
    },
    {
      title: 'Chamados por Cristo',
      quote: 'Descrição inspiradora sobre Chamados por Cristo.',
      description: 'Um livro marcante: Chamados por Cristo, que trouxe grandes reflexões.',
      link: '#',
      tags: ['Leitura', 'Estudo', 'Cristianismo'],
    },
    {
      title: 'Crônicas de São Francisco',
      quote: 'Descrição inspiradora sobre Crônicas de São Francisco.',
      description: 'Um livro marcante: Crônicas de São Francisco, que trouxe grandes reflexões.',
      link: '#',
      tags: ['Leitura', 'Estudo', 'Cristianismo'],
    },
    {
      title: 'Demônio - Mito ou realidade',
      quote: 'Descrição inspiradora sobre Demônio - Mito ou realidade.',
      description: 'Um livro marcante: Demônio - Mito ou realidade, que trouxe grandes reflexões.',
      link: '#',
      tags: ['Leitura', 'Estudo', 'Teologia'],
    },
    {
      title: 'Doutrina Cristã - Santo Agostinho',
      quote: 'Descrição inspiradora sobre Doutrina Cristã - Santo Agostinho.',
      description:
        'Um livro marcante: Doutrina Cristã - Santo Agostinho, que trouxe grandes reflexões.',
      link: '#',
      tags: ['Leitura', 'Estudo', 'Teologia'],
    },
    {
      title: 'Escritos Completos de São Francisco',
      quote: 'Descrição inspiradora sobre Escritos Completos de São Francisco.',
      description:
        'Um livro marcante: Escritos Completos de São Francisco, que trouxe grandes reflexões.',
      link: '#',
      tags: ['Leitura', 'Estudo', 'Cristianismo'],
    },
    {
      title: 'Fides et Ratio',
      quote: 'Descrição inspiradora sobre Fides et Ratio.',
      description: 'Um livro marcante: Fides et Ratio, que trouxe grandes reflexões.',
      link: '#',
      tags: ['Leitura', 'Estudo', 'Filosofia', 'Teologia'],
    },
    {
      title: 'Filoteia',
      quote: 'Descrição inspiradora sobre Filoteia.',
      description: 'Um livro marcante: Filoteia, que trouxe grandes reflexões.',
      link: '#',
      tags: ['Leitura', 'Estudo', 'Espiritualidade'],
    },
    {
      title: 'Homilías Papa Bento XVI',
      quote: 'Descrição inspiradora sobre Homilías Papa Bento XVI.',
      description: 'Um livro marcante: Homilías Papa Bento XVI, que trouxe grandes reflexões.',
      link: '#',
      tags: ['Leitura', 'Estudo', 'Catolicismo'],
    },
    {
      title: 'Jesus de Nazaré',
      quote: 'Descrição inspiradora sobre Jesus de Nazaré.',
      description: 'Um livro marcante: Jesus de Nazaré, que trouxe grandes reflexões.',
      link: '#',
      tags: ['Leitura', 'Estudo', 'Cristianismo'],
    },
    {
      title: 'Nossa Senhora do Carmo',
      quote: 'Descrição inspiradora sobre Nossa Senhora do Carmo.',
      description: 'Um livro marcante: Nossa Senhora do Carmo, que trouxe grandes reflexões.',
      link: '#',
      tags: ['Leitura', 'Estudo', 'Catolicismo'],
    },
    {
      title: 'Padre Léo',
      quote: 'Descrição inspiradora sobre Padre Léo.',
      description: 'Um livro marcante: Padre Léo, que trouxe grandes reflexões.',
      link: '#',
      tags: ['Leitura', 'Estudo', 'Biografia'],
    },
    {
      title: 'Pastores em perigo',
      quote: 'Descrição inspiradora sobre Pastores em perigo.',
      description: 'Um livro marcante: Pastores em perigo, que trouxe grandes reflexões.',
      link: '#',
      tags: ['Leitura', 'Estudo', 'Liderança'],
    },
    {
      title: 'São Francisco de Assis',
      quote: 'Descrição inspiradora sobre São Francisco de Assis.',
      description: 'Um livro marcante: São Francisco de Assis, que trouxe grandes reflexões.',
      link: '#',
      tags: ['Leitura', 'Estudo', 'Biografia'],
    },
    {
      title: 'The art of war',
      quote: 'Descrição inspiradora sobre The art of war.',
      description: 'Um livro marcante: The art of war, que trouxe grandes reflexões.',
      link: '#',
      tags: ['Leitura', 'Estratégia'],
    },
    {
      title: 'Torá interpretada',
      quote: 'Descrição inspiradora sobre Torá interpretada.',
      description: 'Um livro marcante: Torá interpretada, que trouxe grandes reflexões.',
      link: '#',
      tags: ['Leitura', 'Estudo', 'Judaísmo'],
    },
    {
      title: 'São Pio X: vida do Papa que organizou e reformou a Igreja',
      quote: 'Um farol de esperança em meio à crise da Igreja e do mundo moderno.',
      description:
        'Box 85 (Janeiro de 2025) - Uma biografia inédita do incansável defensor da fé, São Pio X.',
      link: 'https://bibliotecacatolica.com.br/',
      tags: ['Biografia', 'História da Igreja', 'Catolicismo'],
    },
    {
      title: 'O Caminho das Virtudes',
      quote: 'A santidade através das virtudes diárias.',
      description:
        'Box 86 (Fevereiro de 2025) - Obra clássica de São Francisco de Sales sobre a busca e o cultivo das virtudes na vida cotidiana.',
      link: 'https://bibliotecacatolica.com.br/',
      tags: ['Leitura', 'Estudo', 'Espiritualidade'],
    },
    {
      title: 'Santa Faustina - Uma biografia espiritual',
      quote: 'A vida dedicada à propagação da Divina Misericórdia.',
      description:
        'Box 87 (Março de 2025) - Um mergulho profundo na vida e na espiritualidade da apóstola da Misericórdia Divina.',
      link: 'https://bibliotecacatolica.com.br/',
      tags: ['Biografia', 'Espiritualidade', 'Catolicismo'],
    },
    {
      title: 'Maria na Doutrina',
      quote: 'Conhecer para amar a Mãe de Deus.',
      description:
        'Box 88 (Abril de 2025) - Um estudo profundo sobre a Virgem Maria e o papel de Nossa Senhora na doutrina cristã.',
      link: 'https://bibliotecacatolica.com.br/',
      tags: ['Estudo', 'Teologia', 'Mariologia'],
    },
    {
      title: 'Nossa Senhora de Fátima (Box de Maio)',
      quote: 'A mensagem mais importante do século XX confiada a três crianças.',
      description:
        'Box 89 (Maio de 2025) - Obra dedicada à mensagem de Nossa Senhora de Fátima e aos três pastorinhos.',
      link: 'https://bibliotecacatolica.com.br/',
      tags: ['História da Igreja', 'Aparições', 'Catolicismo'],
    },
    {
      title: 'Apocalipse Explicado',
      quote: 'Desvendando os mistérios do último livro da Bíblia.',
      description:
        'Lançamento da MBC (2025) escrito pelo padre Henri-Marie Féret, que traz luz sobre as profecias e a esperança cristã.',
      link: 'https://bibliotecacatolica.com.br/',
      tags: ['Estudo', 'Teologia', 'Bíblia'],
    },
    {
      title: 'Meditações Diárias 2026',
      quote: 'A sabedoria da Igreja e dos santos orientando todos os seus dias.',
      description:
        "Lançamento (2026) da Minha Biblioteca Católica em sintonia com o calendário litúrgico e a campanha 'Não tenhais medo'.",
      link: 'https://bibliotecacatolica.com.br/',
      tags: ['Leitura', 'Devocional', 'Espiritualidade'],
    },
  ]);

  readonly featuredBook = computed(() => this.books().find((book) => book.featured));

  readonly age = computed(() => {
    const today = new Date();

    let age = today.getFullYear() - this.birthDate.getFullYear();

    const month = today.getMonth() - this.birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < this.birthDate.getDate())) {
      age--;
    }

    return age;
  });

  scrollToBooks(): void {
    document.getElementById('books')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToAuthor(): void {
    document.getElementById('author')?.scrollIntoView({ behavior: 'smooth' });
  }

  openLink(link: string): void {
    window.open(link, '_blank');
  }
}
