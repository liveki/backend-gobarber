interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'marlon@gobarber.com.br',
      name: 'Marlon da equipe GoBarber',
    },
  },
} as IMailConfig;
