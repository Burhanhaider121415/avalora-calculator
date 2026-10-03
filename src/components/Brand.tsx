import Image from 'next/image';
export default function Brand() {
  return <a className="brand" href="https://theavalora.com" aria-label="Avalora homepage"><span className="brand-mark" aria-hidden="true"><Image src="/images/avalora-logo.jpeg" width={126} height={126} alt="" /></span><span translate="no">AVALORA</span></a>;
}
