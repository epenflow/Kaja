import {title} from 'process'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'blog',
  type: 'document',
  fields: [
    defineField({
      name: 'judul',
      title: 'Judul',
      type: 'string',
    }),
    defineField({
      name: 'deskripsi',
      title: 'deskripsi',
      type: 'blockContent',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      media: 'mainImage',
      title: 'judul',
    },
  },
})
