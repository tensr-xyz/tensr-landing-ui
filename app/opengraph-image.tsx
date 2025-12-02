import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Tensr - Statistical Analysis Platform';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 60,
        background: '#f7f7f4',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui',
      }}
    >
      <div
        style={{
          fontSize: 80,
          fontWeight: 'bold',
          color: '#26251e',
          marginBottom: 20,
        }}
      >
        Tensr
      </div>
      <div
        style={{
          fontSize: 40,
          color: 'rgba(38, 37, 30, 0.6)',
          textAlign: 'center',
          maxWidth: '80%',
        }}
      >
        Statistical Analysis Platform
      </div>
    </div>,
    {
      ...size,
    }
  );
}
