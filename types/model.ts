export type PackageDetails = {
    title: string;
    value: string;  
    packages: {
      name: string;
      id: string;
      href: string;
      duration: string;
      price: string;
      description: string;
      features: string[];
      mostPopular: boolean;
    }[];
  }
  
  