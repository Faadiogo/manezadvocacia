'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Save, Eye, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import RichTextEditor from '@/components/editor/RichTextEditor';
import { getCurrentUser } from '@/lib/auth';
import { type MockUser } from '@/lib/mockData';
import { toast } from 'sonner';
import Link from 'next/link';

export default function NewArticlePage() {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');
  const [published, setPublished] = useState(false);
  const [tags, setTags] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [saving, setSaving] = useState(false);
  const [user, setUser] = useState<MockUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const generateSlug = (text: string) => {
      return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
    };

    if (title && !slug) {
      setSlug(generateSlug(title));
    }
  }, [title, slug]);

  const checkUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      if (!currentUser) {
        router.push('/login');
        return;
      }
      setUser(currentUser);
    } catch (error) {
      router.push('/login');
    }
  };

  const handleSave = async () => {
    if (!title || !content || !excerpt) {
      toast.error('Preencha todos os campos obrigatórios');
      return;
    }

    if (!user) {
      toast.error('Usuário não autenticado');
      return;
    }

    setSaving(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Artigo salvo com sucesso!');
      router.push('/admin/artigos');
    } catch (error: any) {
      console.error('Error saving article:', error);
      toast.error(error.message || 'Erro ao salvar artigo');
    } finally {
      setSaving(false);
    }
  };

  const handlePreview = () => {
    if (!title || !content) {
      toast.error('Preencha pelo menos o título e conteúdo para visualizar');
      return;
    }
    toast.info('Funcionalidade de preview será implementada em breve');
  };

  return (
    <div className="p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between mb-8"
      >
        <div className="flex items-center gap-4">
          <Link href="/admin/artigos">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-brand-primary">
              Novo Artigo
            </h1>
            <p className="text-gray-600">
              Crie um novo artigo para o blog
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={handlePreview}
          >
            <Eye className="h-4 w-4 mr-2" />
            Visualizar
          </Button>
          <Button
            onClick={handleSave}
            disabled={saving}
            className="bg-brand-primary hover:bg-brand-primary/90"
          >
            <Save className="h-4 w-4 mr-2" />
            {saving ? 'Salvando...' : 'Salvar'}
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Conteúdo do Artigo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Título *</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Digite o título do artigo"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="excerpt">Resumo *</Label>
                  <Textarea
                    id="excerpt"
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    placeholder="Breve descrição do artigo para aparecer na listagem"
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <div>
                  <Label>Conteúdo *</Label>
                  <div className="mt-1">
                    <RichTextEditor
                      value={content}
                      onChange={setContent}
                      placeholder="Escreva o conteúdo do seu artigo aqui..."
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Configurações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="slug">URL (Slug)</Label>
                  <Input
                    id="slug"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="url-do-artigo"
                    className="mt-1"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    URL amigável para o artigo
                  </p>
                </div>

                <div>
                  <Label htmlFor="featuredImage">Imagem de Destaque</Label>
                  <Input
                    id="featuredImage"
                    value={featuredImage}
                    onChange={(e) => setFeaturedImage(e.target.value)}
                    placeholder="https://exemplo.com/imagem.jpg"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="tags">Tags</Label>
                  <Input
                    id="tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="direito, civil, consultoria"
                    className="mt-1"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Separe as tags com vírgulas
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="published">Publicar</Label>
                  <Switch
                    id="published"
                    checked={published}
                    onCheckedChange={setPublished}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}