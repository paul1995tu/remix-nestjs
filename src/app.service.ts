import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
  getProducts(): [{ price: string; description: string; totalInventory: string; id: string; title: string; url: string }, { price: string; description: string; totalInventory: string; id: string; title: string; url: string }, { price: string; description: string; totalInventory: string; id: string; title: string; url: string }, { price: string; description: string; totalInventory: string; id: string; title: string; url: string }, { price: string; description: string; totalInventory: string; id: string; title: string; url: string }, { price: string; description: string; totalInventory: string; id: string; title: string; url: string }, { price: string; description: string; totalInventory: string; id: string; title: string; url: string }, { price: string; description: string; totalInventory: string; id: string; title: string; url: string }, { price: string; description: string; totalInventory: string; id: string; title: string; url: string }, { price: string; description: string; totalInventory: string; id: string; title: string; url: string }]{
    return [
      {
        title: 'probierpaket Garuda',
        url: 'https://cdn.shopify.com/s/files/1/0557/2604/7330/products/garuda-linux.webp?v=1666609486',
        description: '',
        totalInventory: '0',
        price: '10.00',
        id: 'gid://shopify/Product/6802192072802'
      },
      {
        title: 'probierset Manjaro',
        url: 'https://cdn.shopify.com/s/files/1/0557/2604/7330/products/Manjaro.jpg?v=1666609559',
        description: '',
        totalInventory: '0',
        price: '20.00',
        id: 'gid://shopify/Product/6802192695394'
      },
      {
        title: 'starterpaket Linux',
        url: 'https://cdn.shopify.com/s/files/1/0557/2604/7330/products/75886-tux-gnu-linux-penguin-free-transparent-image-hd.png?v=1666609646',
        description: '',
        totalInventory: '0',
        price: '9.99',
        id: 'gid://shopify/Product/6802193285218'
      },
      {
        title: 'startpaket asahi linux',
        url: 'https://cdn.shopify.com/s/files/1/0557/2604/7330/products/Asahi-Linux.png?v=1668367561',
        description: '',
        totalInventory: '0',
        price: '15.99',
        id: 'gid://shopify/Product/6802193481826'
      },
      {
        title: 'starterset PoP OS',
        url: 'https://cdn.shopify.com/s/files/1/0557/2604/7330/products/SjUsFffscvu-QOzafhlAG8IO2wiDLUfd7e1KfPOFc5U.webp?v=1666609907',
        description: '',
        totalInventory: '0',
        price: '4.99',
        id: 'gid://shopify/Product/6802193743970'
      },
      {
        title: 'starter kit Kali',
        url: 'https://cdn.shopify.com/s/files/1/0557/2604/7330/products/wp2601088.webp?v=1666609985',
        description: '',
        totalInventory: '0',
        price: '25.99',
        id: 'gid://shopify/Product/6802193842274'
      },
      {
        title: 'starterkit Alpine Linux',
        url: 'https://cdn.shopify.com/s/files/1/0557/2604/7330/products/image_U5h47khnPQ.png?v=1666610196',
        description: 'Alpine Linux is a Linux distribution designed to be small, simple and secure. Unlike most other Linux distributions, Alpine uses musl, BusyBox and OpenRC instead of the more commonly used glibc, GNU Core Utilities and systemd respectively. For security, Alpine compiles all user-space binaries ...',
        totalInventory: '0',
        price: '0.99',
        id: 'gid://shopify/Product/6802194235490'
      },
      {
        title: 'start kit I use Arch btw...',
        url: 'https://cdn.shopify.com/s/files/1/0557/2604/7330/products/R4ct6De.png?v=1666610464',
        description: 'Arch Linux (/ɑːrtʃ/) is an independently developed, x86-64 general-purpose Linux distribution that strives to provide the latest stable versions of most software by following a rolling-release model. The default installation is a minimal base system, configured by the user to only add what ...',
        totalInventory: '0',
        price: '7.00',
        id: 'gid://shopify/Product/6802194563170'
      },
      {
        title: 'Linux OS startkit',
        url: 'https://cdn.shopify.com/s/files/1/0557/2604/7330/products/steam-os-1020.webp?v=1666610593',
        description: 'SteamOS is a Linux distribution developed by Valve. It is open source with some closed source components and is the primary operating system for Steam Machines and the Steam Deck. The initial versions of SteamOS, versions 1.0 and 2.0, were based on the Debian distribution of Linux',
        totalInventory: '0',
        price: '0.00',
        id: 'gid://shopify/Product/6802194759778'
      },
      {
        title: 'fedora-probierbox',
        url: 'https://cdn.shopify.com/s/files/1/0557/2604/7330/products/fedora-26-linux-os-to-ship-with-openssl-1-1-0-by-default-for-better-security-508672-2.webp?v=1666610704',
        description: 'Fedora [fɨˈdɒr.ə] ist eine RPM-basierte Linux-Distribution. Ziel der Entwickler der Distribution ist es, Freie Software zu fördern und ein Betriebssystem für eine möglichst vielfältige Zielgruppe zu gestalten. Organisiert wird die Entwicklung in der Online-Community des Fedora-Projekts, ..',
        totalInventory: '0',
        price: '13.00',
        id: 'gid://shopify/Product/6802194956386'
      },
    ];
  }
}
