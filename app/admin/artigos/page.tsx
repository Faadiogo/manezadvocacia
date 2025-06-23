'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PlusCircle, Edit, Trash2, Eye, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { getMockArticles, type MockArticle } from '@/lib/mockData';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { toast } from 'sonner';

export default function ManageArticlesPage() {
  const [articles, setArticles] = useState<MockArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const data = await getMockArticles();
      setArticles(data);
    } catch (error) {
      console.error('Error fetching articles:', error);
      toast.error('Erro ao carregar artigos');
    } finally {
      setLoading(false);
    }
  };

  const deleteArticle = async (id: string) => {
    try {
      setArticles(articles.filter(article => article.id !== id));
      toast.success('Artigo excluído com sucesso');
    } catch (error) {
      console.error('Error deleting article:', error);
      toast.error('Erro ao excluir artigo');
    }
  };

  const togglePublished = async (id: string, currentStatus: boolean) => {
    try {
      setArticles(articles.map(article =>
        article.id === id
          ? { ...article, published: !currentStatus }
          : article
      ));

      toast.success(`Artigo ${!currentStatus ? 'publicado' : 'despublicado'} com sucesso`);
    } catch (error) {
      console.error('Error updating article:', error);
      toast.error('Erro ao atualizar artigo');
    }
  };

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center mb-8"
      >
        <div>
          <h1 className="text-3xl font-bold text-brand-primary mb-2">
            Gerenciar Artigos
          </h1>
          <p className="text-gray-600">
            Visualize, edite e gerencie todos os seus artigos.
          </p>
        </div>
        <Link href="/admin/artigos/novo">
          <Button className="bg-brand-primary hover:bg-brand-primary/90">
            <PlusCircle className="mr-2 h-4 w-4" />
            Novo Artigo
          </Button>
        </Link>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-6"
      >
        <div className="relative max-w-md">
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

      {/* Articles List */}
      <div className="space-y-4">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold text-brand-primary">
                          {article.title}
                        </h3>
                        <Badge variant={article.published ? 'default' : 'secondary'}>
                          {article.published ? 'Publicado' : 'Rascunho'}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-3 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="text-sm text-gray-500">
                        Criado em {format(new Date(article.created_at), 'dd/MM/yyyy', { locale: ptBR })} •
                        Atualizado em {format(new Date(article.updated_at), 'dd/MM/yyyy', { locale: ptBR })}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      {article.published && (
                        <Link href={`/blog/${article.slug}`} target="_blank">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                      <Link href={`/admin/artigos/editar/${article.id}`}>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button
                        variant={article.published ? 'outline' : 'default'}
                        size="sm"
                        onClick={() => togglePublished(article.id, article.published)}
                      >
                        {article.published ? 'Despublicar' : 'Publicar'}
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Excluir artigo</AlertDialogTitle>
                            <AlertDialogDescription>
                              Tem certeza que deseja excluir este artigo? Esta ação não pode ser desfeita.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => deleteArticle(article.id)}
                              className="bg-red-600 hover:bg-red-700"
                            >
                              Excluir
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg mb-4">
              {searchTerm ? 'Nenhum artigo encontrado.' : 'Nenhum artigo criado ainda.'}
            </p>
            {!searchTerm && (
              <Link href="/admin/artigos/novo">
                <Button className="bg-brand-primary hover:bg-brand-primary/90">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Criar Primeiro Artigo
                </Button>
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}