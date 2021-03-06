import gql from 'graphql-tag';
import { AccountsPasswordModuleConfig } from '..';

export default (config: AccountsPasswordModuleConfig) => gql`
  ${config.extendTypeDefs ? 'extend' : ''} type ${config.rootMutationName || 'Mutation'} {
    # Creates a user with a password, returns the id corresponding db ids, such as number IDs, ObjectIDs or UUIDs
    createUser(user: CreateUserInput!): ID
    verifyEmail(token: String!): Boolean
    resetPassword(token: String!, newPassword: String!): LoginResult
    sendVerificationEmail(email: String!): Boolean
    sendResetPasswordEmail(email: String!): Boolean
    changePassword(oldPassword: String!, newPassword: String!): Boolean
    twoFactorSet(secret: TwoFactorSecretKeyInput!, code: String!): Boolean
    twoFactorUnset(code: String!): Boolean
  }
`;
