import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Ant Design Pro',
  pwa: true,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
  token: {
    sider: {
      colorTextMenuSelected: '#165DFF',
      colorTextMenuItemHover: '#165DFF',
      colorBgMenuItemHover: '#F2F3F5',
      colorBgMenuItemSelected: '#F2F3F5',
      colorMenuBackground: '#fff',
    },
    header: {
      heightLayoutHeader: 60,
      colorTextRightActionsItem: '#fff',
    },
    pageContainer: {
      paddingBlockPageContainerContent: 16,
      paddingInlinePageContainerContent: 20,
    },
  },
};

export default Settings;
