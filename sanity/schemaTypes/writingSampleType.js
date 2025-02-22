import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'writingSample',
  title: 'Writing Sample',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'previewImage',
      title: 'Preview Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'pdf',
      title: 'Writing Sample PDF',
      type: 'file',
      options: { storeOriginalFilename: true },
    }),
  ],
});
