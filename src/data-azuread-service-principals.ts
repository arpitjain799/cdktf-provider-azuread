// https://www.terraform.io/docs/providers/azuread/d/service_principals.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzureadServicePrincipalsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The application IDs (client IDs) of the applications associated with the service principals
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/service_principals.html#application_ids DataAzureadServicePrincipals#application_ids}
  */
  readonly applicationIds?: string[];
  /**
  * The display names of the applications associated with the service principals
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/service_principals.html#display_names DataAzureadServicePrincipals#display_names}
  */
  readonly displayNames?: string[];
  /**
  * Ignore missing service principals and return the service principals that were found. The data source will still fail if no service principals are found
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/service_principals.html#ignore_missing DataAzureadServicePrincipals#ignore_missing}
  */
  readonly ignoreMissing?: boolean | cdktf.IResolvable;
  /**
  * The object IDs of the service principals
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/service_principals.html#object_ids DataAzureadServicePrincipals#object_ids}
  */
  readonly objectIds?: string[];
  /**
  * Fetch all service principals with no filter and return all that were found. The data source will still fail if no service principals are found.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/service_principals.html#return_all DataAzureadServicePrincipals#return_all}
  */
  readonly returnAll?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/service_principals.html#timeouts DataAzureadServicePrincipals#timeouts}
  */
  readonly timeouts?: DataAzureadServicePrincipalsTimeouts;
}
export class DataAzureadServicePrincipalsServicePrincipals extends cdktf.ComplexComputedList {

  // account_enabled - computed: true, optional: false, required: false
  public get accountEnabled() {
    return this.getBooleanAttribute('account_enabled') as any;
  }

  // app_role_assignment_required - computed: true, optional: false, required: false
  public get appRoleAssignmentRequired() {
    return this.getBooleanAttribute('app_role_assignment_required') as any;
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // application_tenant_id - computed: true, optional: false, required: false
  public get applicationTenantId() {
    return this.getStringAttribute('application_tenant_id');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // preferred_single_sign_on_mode - computed: true, optional: false, required: false
  public get preferredSingleSignOnMode() {
    return this.getStringAttribute('preferred_single_sign_on_mode');
  }

  // saml_metadata_url - computed: true, optional: false, required: false
  public get samlMetadataUrl() {
    return this.getStringAttribute('saml_metadata_url');
  }

  // service_principal_names - computed: true, optional: false, required: false
  public get servicePrincipalNames() {
    return this.getListAttribute('service_principal_names');
  }

  // sign_in_audience - computed: true, optional: false, required: false
  public get signInAudience() {
    return this.getStringAttribute('sign_in_audience');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAzureadServicePrincipalsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/service_principals.html#read DataAzureadServicePrincipals#read}
  */
  readonly read?: string;
}

function dataAzureadServicePrincipalsTimeoutsToTerraform(struct?: DataAzureadServicePrincipalsTimeoutsOutputReference | DataAzureadServicePrincipalsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzureadServicePrincipalsTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/d/service_principals.html azuread_service_principals}
*/
export class DataAzureadServicePrincipals extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_service_principals";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/d/service_principals.html azuread_service_principals} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzureadServicePrincipalsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAzureadServicePrincipalsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuread_service_principals',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationIds = config.applicationIds;
    this._displayNames = config.displayNames;
    this._ignoreMissing = config.ignoreMissing;
    this._objectIds = config.objectIds;
    this._returnAll = config.returnAll;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_ids - computed: true, optional: true, required: false
  private _applicationIds?: string[] | undefined; 
  public get applicationIds() {
    return this.getListAttribute('application_ids');
  }
  public set applicationIds(value: string[] | undefined) {
    this._applicationIds = value;
  }
  public resetApplicationIds() {
    this._applicationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdsInput() {
    return this._applicationIds
  }

  // display_names - computed: true, optional: true, required: false
  private _displayNames?: string[] | undefined; 
  public get displayNames() {
    return this.getListAttribute('display_names');
  }
  public set displayNames(value: string[] | undefined) {
    this._displayNames = value;
  }
  public resetDisplayNames() {
    this._displayNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNamesInput() {
    return this._displayNames
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_missing - computed: false, optional: true, required: false
  private _ignoreMissing?: boolean | cdktf.IResolvable | undefined; 
  public get ignoreMissing() {
    return this.getBooleanAttribute('ignore_missing') as any;
  }
  public set ignoreMissing(value: boolean | cdktf.IResolvable | undefined) {
    this._ignoreMissing = value;
  }
  public resetIgnoreMissing() {
    this._ignoreMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingInput() {
    return this._ignoreMissing
  }

  // object_ids - computed: true, optional: true, required: false
  private _objectIds?: string[] | undefined; 
  public get objectIds() {
    return this.getListAttribute('object_ids');
  }
  public set objectIds(value: string[] | undefined) {
    this._objectIds = value;
  }
  public resetObjectIds() {
    this._objectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdsInput() {
    return this._objectIds
  }

  // return_all - computed: false, optional: true, required: false
  private _returnAll?: boolean | cdktf.IResolvable | undefined; 
  public get returnAll() {
    return this.getBooleanAttribute('return_all') as any;
  }
  public set returnAll(value: boolean | cdktf.IResolvable | undefined) {
    this._returnAll = value;
  }
  public resetReturnAll() {
    this._returnAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnAllInput() {
    return this._returnAll
  }

  // service_principals - computed: true, optional: false, required: false
  public servicePrincipals(index: string) {
    return new DataAzureadServicePrincipalsServicePrincipals(this, 'service_principals', index);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzureadServicePrincipalsTimeouts | undefined; 
  private __timeoutsOutput = new DataAzureadServicePrincipalsTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzureadServicePrincipalsTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._applicationIds),
      display_names: cdktf.listMapper(cdktf.stringToTerraform)(this._displayNames),
      ignore_missing: cdktf.booleanToTerraform(this._ignoreMissing),
      object_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._objectIds),
      return_all: cdktf.booleanToTerraform(this._returnAll),
      timeouts: dataAzureadServicePrincipalsTimeoutsToTerraform(this._timeouts),
    };
  }
}
