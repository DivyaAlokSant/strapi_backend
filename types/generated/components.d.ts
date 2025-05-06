import type { Struct, Schema } from '@strapi/strapi';

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
      'content.table': ContentTable;
      'content.stack-bar-chart': ContentStackBarChart;
      'content.pie-chart': ContentPieChart;
      'content.para-content': ContentParaContent;
      'content.line-chart': ContentLineChart;
      'content.combo-bar-line-chart': ContentComboBarLineChart;
      'content.chart-as-image': ContentChartAsImage;
      'content.bar-chart': ContentBarChart;
    }
  }
}
