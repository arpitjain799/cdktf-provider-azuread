// https://www.terraform.io/docs/providers/azuread/d/groups.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzureadGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The display names of the groups
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/groups.html#display_names DataAzureadGroups#display_names}
  */
  readonly displayNames?: string[];
  /**
  * Whether the groups are mail-enabled
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/groups.html#mail_enabled DataAzureadGroups#mail_enabled}
  */
  readonly mailEnabled?: boolean | cdktf.IResolvable;
  /**
  * The object IDs of the groups
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/groups.html#object_ids DataAzureadGroups#object_ids}
  */
  readonly objectIds?: string[];
  /**
  * Retrieve all groups with no filter
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/groups.html#return_all DataAzureadGroups#return_all}
  */
  readonly returnAll?: boolean | cdktf.IResolvable;
  /**
  * Whether the groups are security-enabled
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/groups.html#security_enabled DataAzureadGroups#security_enabled}
  */
  readonly securityEnabled?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/groups.html#timeouts DataAzureadGroups#timeouts}
  */
  readonly timeouts?: DataAzureadGroupsTimeouts;
}
export interface DataAzureadGroupsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/groups.html#read DataAzureadGroups#read}
  */
  readonly read?: string;
}

function dataAzureadGroupsTimeoutsToTerraform(struct?: DataAzureadGroupsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/d/groups.html azuread_groups}
*/
export class DataAzureadGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_groups";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/d/groups.html azuread_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzureadGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAzureadGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuread_groups',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayNames = config.displayNames;
    this._mailEnabled = config.mailEnabled;
    this._objectIds = config.objectIds;
    this._returnAll = config.returnAll;
    this._securityEnabled = config.securityEnabled;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_names - computed: true, optional: true, required: false
  private _displayNames?: string[];
  public get displayNames() {
    return this.getListAttribute('display_names');
  }
  public set displayNames(value: string[]) {
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

  // mail_enabled - computed: true, optional: true, required: false
  private _mailEnabled?: boolean | cdktf.IResolvable;
  public get mailEnabled() {
    return this.getBooleanAttribute('mail_enabled');
  }
  public set mailEnabled(value: boolean | cdktf.IResolvable) {
    this._mailEnabled = value;
  }
  public resetMailEnabled() {
    this._mailEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailEnabledInput() {
    return this._mailEnabled
  }

  // object_ids - computed: true, optional: true, required: false
  private _objectIds?: string[];
  public get objectIds() {
    return this.getListAttribute('object_ids');
  }
  public set objectIds(value: string[]) {
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
  private _returnAll?: boolean | cdktf.IResolvable;
  public get returnAll() {
    return this.getBooleanAttribute('return_all');
  }
  public set returnAll(value: boolean | cdktf.IResolvable ) {
    this._returnAll = value;
  }
  public resetReturnAll() {
    this._returnAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnAllInput() {
    return this._returnAll
  }

  // security_enabled - computed: true, optional: true, required: false
  private _securityEnabled?: boolean | cdktf.IResolvable;
  public get securityEnabled() {
    return this.getBooleanAttribute('security_enabled');
  }
  public set securityEnabled(value: boolean | cdktf.IResolvable) {
    this._securityEnabled = value;
  }
  public resetSecurityEnabled() {
    this._securityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityEnabledInput() {
    return this._securityEnabled
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzureadGroupsTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzureadGroupsTimeouts ) {
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
      display_names: cdktf.listMapper(cdktf.stringToTerraform)(this._displayNames),
      mail_enabled: cdktf.booleanToTerraform(this._mailEnabled),
      object_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._objectIds),
      return_all: cdktf.booleanToTerraform(this._returnAll),
      security_enabled: cdktf.booleanToTerraform(this._securityEnabled),
      timeouts: dataAzureadGroupsTimeoutsToTerraform(this._timeouts),
    };
  }
}
