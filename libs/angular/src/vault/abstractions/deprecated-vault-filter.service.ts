// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore
import { Observable } from "rxjs";

// This import has been flagged as unallowed for this class. It may be involved in a circular dependency loop.
// eslint-disable-next-line no-restricted-imports
import { CollectionView } from "@bitwarden/admin-console/common";
import { Organization } from "@bitwarden/common/admin-console/models/domain/organization";
import { FolderView } from "@bitwarden/common/vault/models/view/folder.view";

import { DynamicTreeNode } from "../vault-filter/models/dynamic-tree-node.model";

/**
 * @deprecated August 30 2022: Use new VaultFilterService with observables
 */
export abstract class DeprecatedVaultFilterService {
  buildOrganizations: () => Promise<Organization[]>;
  buildNestedFolders: (organizationId?: string) => Observable<DynamicTreeNode<FolderView>>;
  buildCollections: (organizationId?: string) => Promise<DynamicTreeNode<CollectionView>>;
  buildCollapsedFilterNodes: () => Promise<Set<string>>;
  storeCollapsedFilterNodes: (collapsedFilterNodes: Set<string>) => Promise<void>;
  checkForSingleOrganizationPolicy: () => Promise<boolean>;
  checkForOrganizationDataOwnershipPolicy: () => Promise<boolean>;
}
