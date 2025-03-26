import type { Struct, Schema } from '@strapi/strapi';

export interface ContentTable extends Struct.ComponentSchema {
  collectionName: 'components_content_tables';
  info: {
    displayName: 'table';
    icon: 'apps';
  };
  attributes: {
    tableHeader: Schema.Attribute.String;
    tableData: Schema.Attribute.JSON;
    tableFooter: Schema.Attribute.Blocks;
  };
}

export interface ContentParaContent extends Struct.ComponentSchema {
  collectionName: 'components_content_para_contents';
  info: {
    displayName: 'paraContent';
    icon: 'file';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
  };
}

export interface ContentChartAsImage extends Struct.ComponentSchema {
  collectionName: 'components_content_chart_as_images';
  info: {
    displayName: 'chartAsImage';
    description: '';
  };
  attributes: {
    chart: Schema.Attribute.Media<'images'>;
    chartHead: Schema.Attribute.String;
    chartFooter: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.table': ContentTable;
      'content.para-content': ContentParaContent;
      'content.chart-as-image': ContentChartAsImage;
    }
  }
}
