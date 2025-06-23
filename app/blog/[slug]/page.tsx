import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getMockArticleBySlug, getMockArticles, type MockArticle } from '@/lib/mockData';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { motion } from 'framer-motion';

// Função obrigatória para rotas dinâmicas quando usando output: export
export async function generateStaticParams() {
  const articles = await getMockArticles(true); // Apenas artigos publicados
  
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

interface Props {
  params: {
    slug: string;
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = params;
  
  try {
    const article = await getMockArticleBySlug(slug);
    
    if (!article) {
      notFound();
    }

    return <ArticleContent article={article} />;
  } catch (error) {
    console.error('Error fetching article:', error);
    notFound();
  }
}

// Componente cliente para as animações
function ArticleContent({ article }: { article: MockArticle }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 via-secondary to-secondary/20 text-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <Link href="/blog">
              <Button variant="default" size="sm" className="mb-6 border-white text-white hover:bg-white hover:text-brand-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Blog
              </Button>
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {format(new Date(article.created_at), 'dd/MM/yyyy', { locale: ptBR })}
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {article.profiles.full_name}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {article.featured_image && (
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
              <img
                src={article.featured_image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* Excerpt */}
            <div className="mb-8 p-4 bg-gray-50 rounded-lg border-l-4 border-brand-primary">
              <p className="text-lg text-gray-700 italic">
                {article.excerpt}
              </p>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-brand-primary prose-a:text-brand-primary prose-blockquote:border-brand-primary"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="h-4 w-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">Tags:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/blog">
            <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Blog
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}