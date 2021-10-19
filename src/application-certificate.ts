// https://www.terraform.io/docs/providers/azuread/r/application_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The object ID of the application for which this certificate should be created
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#application_object_id ApplicationCertificate#application_object_id}
  */
  readonly applicationObjectId: string;
  /**
  * Specifies the encoding used for the supplied certificate data
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#encoding ApplicationCertificate#encoding}
  */
  readonly encoding?: string;
  /**
  * The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If omitted, the API will decide a suitable expiry date, which is typically around 2 years from the start date
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#end_date ApplicationCertificate#end_date}
  */
  readonly endDate?: string;
  /**
  * A relative duration for which the certificate is valid until, for example `240h` (10 days) or `2400h30m`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#end_date_relative ApplicationCertificate#end_date_relative}
  */
  readonly endDateRelative?: string;
  /**
  * A UUID used to uniquely identify this certificate. If omitted, a random UUID will be automatically generated
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#key_id ApplicationCertificate#key_id}
  */
  readonly keyId?: string;
  /**
  * The start date from which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date and time are use
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#start_date ApplicationCertificate#start_date}
  */
  readonly startDate?: string;
  /**
  * The type of key/certificate
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#type ApplicationCertificate#type}
  */
  readonly type?: string;
  /**
  * The certificate data, which can be PEM encoded, base64 encoded DER or hexadecimal encoded DER. See also the `encoding` argumen
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#value ApplicationCertificate#value}
  */
  readonly value: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#timeouts ApplicationCertificate#timeouts}
  */
  readonly timeouts?: ApplicationCertificateTimeouts;
}
export interface ApplicationCertificateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#create ApplicationCertificate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#delete ApplicationCertificate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#read ApplicationCertificate#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html#update ApplicationCertificate#update}
  */
  readonly update?: string;
}

function applicationCertificateTimeoutsToTerraform(struct?: ApplicationCertificateTimeoutsOutputReference | ApplicationCertificateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ApplicationCertificateTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
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

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html azuread_application_certificate}
*/
export class ApplicationCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_application_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/application_certificate.html azuread_application_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_application_certificate',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationObjectId = config.applicationObjectId;
    this._encoding = config.encoding;
    this._endDate = config.endDate;
    this._endDateRelative = config.endDateRelative;
    this._keyId = config.keyId;
    this._startDate = config.startDate;
    this._type = config.type;
    this._value = config.value;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_object_id - computed: false, optional: false, required: true
  private _applicationObjectId?: string; 
  public get applicationObjectId() {
    return this.getStringAttribute('application_object_id');
  }
  public set applicationObjectId(value: string) {
    this._applicationObjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationObjectIdInput() {
    return this._applicationObjectId
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string | undefined; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string | undefined) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding
  }

  // end_date - computed: true, optional: true, required: false
  private _endDate?: string | undefined; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string | undefined) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate
  }

  // end_date_relative - computed: false, optional: true, required: false
  private _endDateRelative?: string | undefined; 
  public get endDateRelative() {
    return this.getStringAttribute('end_date_relative');
  }
  public set endDateRelative(value: string | undefined) {
    this._endDateRelative = value;
  }
  public resetEndDateRelative() {
    this._endDateRelative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateRelativeInput() {
    return this._endDateRelative
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string | undefined; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string | undefined) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId
  }

  // start_date - computed: true, optional: true, required: false
  private _startDate?: string | undefined; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string | undefined) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApplicationCertificateTimeouts | undefined; 
  private __timeoutsOutput = new ApplicationCertificateTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ApplicationCertificateTimeouts | undefined) {
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
      application_object_id: cdktf.stringToTerraform(this._applicationObjectId),
      encoding: cdktf.stringToTerraform(this._encoding),
      end_date: cdktf.stringToTerraform(this._endDate),
      end_date_relative: cdktf.stringToTerraform(this._endDateRelative),
      key_id: cdktf.stringToTerraform(this._keyId),
      start_date: cdktf.stringToTerraform(this._startDate),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
      timeouts: applicationCertificateTimeoutsToTerraform(this._timeouts),
    };
  }
}
