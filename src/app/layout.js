import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "部署服务",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  );
}
