import ISendDTO from '../dtos/IMailSendMailDTO';

export default interface IMailProvider {
  sendMail(data: ISendDTO): Promise<void>;
}
