'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
// import { supabase } from '@/lib/supabase'; // COMMENTED OUT FOR PREVIEW
import { getMockArticles, type MockArticle } from '@/lib/mockData'; // ADDED FOR PREVIEW
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

// interface Article { // COMMENTED OUT FOR PREVIEW
//   id: string;
//   title: string;
//   excerpt: string;
//   slug: string;
//   featured_image?: string;
//   tags?: string[];
//   created_at: string;
//   profiles: {
//     full_name: string;
//   };
// }

export default function BlogPage() {
  const [articles, setArticles] = useState<MockArticle[]>([]); // CHANGED FOR PREVIEW
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      // COMMENTED OUT FOR PREVIEW - UNCOMMENT WHEN INTEGRATING WITH SUPABASE
      /*
      const { data, error } = await supabase
        .from('articles')
        .select(`
          id,
          title,
          excerpt,
          slug,
          featured_image,
          tags,
          created_at,
          profiles (
            full_name
          )
        `)
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setArticles(data || []);
      */

      // ADDED FOR PREVIEW - Using mock data
      const data = await getMockArticles(true); // Only published articles
      setArticles(data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 via-secondary to-secondary/20 text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog Jurídico
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Artigos, análises e insights sobre o mundo jurídico para manter você sempre atualizado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </motion.div>

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    {article.featured_image && (
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img
                          src={article.featured_image}
                          alt={article.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {format(new Date(article.created_at), 'dd/MM/yyyy', { locale: ptBR })}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {article.profiles.full_name}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3 text-brand-primary line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      {article.tags && article.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {article.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                      
                      <Link
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center text-brand-primary hover:text-brand-primary/80 font-medium"
                      >
                        Ler mais
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">
                {searchTerm ? 'Nenhum artigo encontrado.' : 'Nenhum artigo publicado ainda.'}
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}