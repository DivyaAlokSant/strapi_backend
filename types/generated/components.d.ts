import type { Struct, Schema } from '@strapi/strapi';

export interface ContentTreeChart extends Struct.ComponentSchema {
  collectionName: 'components_content_tree_charts';
  info: {
    displayName: 'TreeChart';
  };
  attributes: {
    Title: Schema.Attribute.String;
    data: Schema.Attribute.JSON;
    footer: Schema.Attribute.Blocks;
  };
}

export interface ContentTextCard extends Struct.ComponentSchema {
  collectionName: 'components_content_text_cards';
  info: {
    displayName: 'TextCard';
    icon: 'bulletList';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    detail: Schema.Attribute.Text;
  };
}

export interface ContentTableuChart extends Struct.ComponentSchema {
  collectionName: 'components_content_tableu_charts';
  info: {
    displayName: 'tableuChart';
    icon: 'chartCircle';
  };
  attributes: {
    Title: Schema.Attribute.String;
    EmbedCode: Schema.Attribute.Text;
    height: Schema.Attribute.Integer;
    width: Schema.Attribute.String;
  };
}

export interface ContentTable extends Struct.ComponentSchema {
  collectionName: 'components_content_tables';
  info: {
    displayName: 'table';
    icon: 'apps';
    description: '';
  };
  attributes: {
    tableHeader: Schema.Attribute.String;
    tableData: Schema.Attribute.JSON;
    tableFooter: Schema.Attribute.Blocks;
    HighlightLastRow: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface ContentSunburstChart extends Struct.ComponentSchema {
  collectionName: 'components_content_sunburst_charts';
  info: {
    displayName: 'SunburstChart';
  };
  attributes: {
    title: Schema.Attribute.String;
    data: Schema.Attribute.JSON & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
    height: Schema.Attribute.Integer;
    footer: Schema.Attribute.Blocks;
  };
}

export interface ContentStackBarChart extends Struct.ComponentSchema {
  collectionName: 'components_content_stack_bar_charts';
  info: {
    displayName: 'StackBarChart';
    icon: 'slideshow';
  };
  attributes: {
    chartTitle: Schema.Attribute.String;
    xkey: Schema.Attribute.String;
    chartData: Schema.Attribute.JSON;
    barColors: Schema.Attribute.JSON;
    tooltipEnabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    legendEnabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    chartFooter: Schema.Attribute.Blocks;
  };
}

export interface ContentSankeyChart extends Struct.ComponentSchema {
  collectionName: 'components_content_sankey_charts';
  info: {
    displayName: 'SankeyChart';
    description: '';
  };
  attributes: {
    Title: Schema.Attribute.String;
    dataNodes: Schema.Attribute.JSON & Schema.Attribute.Required;
    datalinks: Schema.Attribute.JSON;
    footer: Schema.Attribute.Blocks;
  };
}

export interface ContentPieChart extends Struct.ComponentSchema {
  collectionName: 'components_content_pie_charts';
  info: {
    displayName: 'PieChart';
    icon: 'chartCircle';
    description: '';
  };
  attributes: {
    chartTitle: Schema.Attribute.String;
    pieChartData: Schema.Attribute.JSON & Schema.Attribute.Required;
    pieColors: Schema.Attribute.JSON;
    tooltipEnabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    legendEnabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    chartFooter: Schema.Attribute.Blocks;
  };
}

export interface ContentParaContent extends Struct.ComponentSchema {
  collectionName: 'components_content_para_contents';
  info: {
    displayName: 'paraContent';
    icon: 'file';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
  };
}

export interface ContentLineChart extends Struct.ComponentSchema {
  collectionName: 'components_content_line_charts';
  info: {
    displayName: 'LineChart';
    icon: 'slideshow';
    description: '';
  };
  attributes: {
    chartTitle: Schema.Attribute.String;
    xkey: Schema.Attribute.String;
    chartData: Schema.Attribute.JSON & Schema.Attribute.Required;
    TooltipEnabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    LegendEnabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    lineColors: Schema.Attribute.JSON;
    chartFooter: Schema.Attribute.Blocks;
  };
}

export interface ContentComboBarLineChart extends Struct.ComponentSchema {
  collectionName: 'components_content_combo_bar_line_charts';
  info: {
    displayName: 'ComboBarLineChart';
    icon: 'slideshow';
    description: '';
  };
  attributes: {
    chartTitle: Schema.Attribute.String;
    xkey: Schema.Attribute.String;
    barChartData: Schema.Attribute.JSON;
    lineChartData: Schema.Attribute.JSON;
    barColors: Schema.Attribute.JSON;
    lineColors: Schema.Attribute.JSON;
    tooltipEnabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    legendEnabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    chartFooter: Schema.Attribute.Blocks;
  };
}

export interface ContentChartAsImage extends Struct.ComponentSchema {
  collectionName: 'components_content_chart_as_images';
  info: {
    displayName: 'dataImage';
    description: '';
    icon: 'landscape';
  };
  attributes: {
    chart: Schema.Attribute.Media<'images'>;
    chartHead: Schema.Attribute.String;
    chartFooter: Schema.Attribute.Blocks;
  };
}

export interface ContentBarChart extends Struct.ComponentSchema {
  collectionName: 'components_content_bar_charts';
  info: {
    displayName: 'BarChart';
    icon: 'slideshow';
    description: '';
  };
  attributes: {
    Title: Schema.Attribute.Text;
    Xkey: Schema.Attribute.String;
    chartData: Schema.Attribute.JSON;
    TooltipEnabled: Schema.Attribute.Boolean;
    LegendEnables: Schema.Attribute.Boolean;
    barColors: Schema.Attribute.JSON;
    chartFooter: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.tree-chart': ContentTreeChart;
      'content.text-card': ContentTextCard;
      'content.tableu-chart': ContentTableuChart;
      'content.table': ContentTable;
      'content.sunburst-chart': ContentSunburstChart;
      'content.stack-bar-chart': ContentStackBarChart;
      'content.sankey-chart': ContentSankeyChart;
      'content.pie-chart': ContentPieChart;
      'content.para-content': ContentParaContent;
      'content.line-chart': ContentLineChart;
      'content.combo-bar-line-chart': ContentComboBarLineChart;
      'content.chart-as-image': ContentChartAsImage;
      'content.bar-chart': ContentBarChart;
    }
  }
}
